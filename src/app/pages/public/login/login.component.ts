import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

/**
 * Modules
 */
import { NotificationsService } from 'angular2-notifications';

/* Form control */
import { controlField } from './form';

/**
 * API
 */
import { AuthService } from '@api/auth/auth.service';

/**
 * Libraries
 */
import { PageCore } from '@lib/PageCore';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends PageCore implements OnInit {

  form: FormGroup;

  controlField: IControlField = controlField;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) {
    super();
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  /**
   * Build login form
   */
  private buildLoginForm() {
    this.form = this.fb.group(this.controlField.fields);
  }

  /**
   * Change form loader value
   * @param value: Loader value
   */
  private changeFormLoader(value: boolean) {
    this.loader = value;
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  /**
   * Submit event of form
   */
  async onSubmit() {
    if (this.form.valid) {
      this.changeFormLoader(true);
      const email = this.form.get('email').value.toLowerCase();
      const password = this.form.get('password').value;
      try {
        const response = await this.authService.login(email, password);
        this.notificationsService.success('Bienvenido', response.data.user.name);
      } catch (error) {
        this.changeFormLoader(false);
        console.warn('Error@LoginComponent@onSubmit:', error);
      }
    }
  }

  /**
   * Clean email value
   * @param event: Event object
   */
  cleanEmail(event: object): void {
    this.form.controls.email.setValue(this.form.get('email').value.toLocaleLowerCase());
  }

}

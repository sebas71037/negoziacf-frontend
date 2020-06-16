import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

/**
 * Models
 */
import { User } from '@model/User';
import { PhoneType } from '@model/PhoneType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends PageCore implements OnInit {

  form: FormGroup;

  controlField: IControlField = controlField;

  user: User = {};

  phoneTypeList: PhoneType[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationsService: NotificationsService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.phoneTypeList = this.activatedRoute.snapshot.data.phoneTypeList || [];
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
      this.user.name = this.form.get('name').value;
      this.user.lastname = this.form.get('lastname').value;
      this.user.email = this.form.get('email').value.toLowerCase();
      this.user.sex = this.form.get('sex').value;
      this.user.password = this.form.get('password').value;
      this.user.phone = this.form.get('phone').value;
      this.user.phoneTypeId = this.form.get('phoneTypeId').value;
      try {
        const response = await this.authService.register(this.user);
        this.notificationsService.success('Bienvenido', response.data.user.name);
        this.changeFormLoader(false);
      } catch (error) {
        this.changeFormLoader(false);
        console.warn('Error@RegisterComponent@onSubmit:', error);
      }
    }
  }

  /**
   * Clean email value
   * @param event: Event object
   */
  cleanEmail(event: object): void {
    const email = this.form.get('email').value;
    this.form.controls.email.setValue(email ? email.toLocaleLowerCase() : null);
  }

}

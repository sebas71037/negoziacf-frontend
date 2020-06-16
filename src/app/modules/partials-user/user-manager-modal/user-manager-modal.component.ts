import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Libraries
 */
import { FormModalCore } from '@lib/FormModalCore';

/**
 * Modules
 */
import { NotificationsService } from 'angular2-notifications';

/* Form control */
import { controlField } from './form';

/**
 * Models
 */
import { PhoneType } from '@model/PhoneType';
import { User } from '@model/User';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

/**
 * API
 */
import { UserService } from '@api/user/user.service';

@Component({
  selector: 'app-user-manager-modal',
  templateUrl: './user-manager-modal.component.html',
  styleUrls: ['./user-manager-modal.component.scss']
})
export class UserManagerModalComponent extends FormModalCore {

  @Input() user: User = {};
  @Input() phoneTypeList: PhoneType[] = [];

  controlField: IControlField = controlField;

  constructor(
    protected fb: FormBuilder,
    private userService: UserService,
    private notificationsService: NotificationsService
  ) {
    super(fb);
  }

  protected prepareForm() {
    if (this.user._id) {
      this.form.controls.name.patchValue(this.user.name);
      this.form.controls.lastname.patchValue(this.user.lastname);
      this.form.controls.email.patchValue(this.user.email);
      this.form.controls.email.disable({ onlySelf: true });
      this.form.controls.sex.patchValue(this.user.sex);
      this.form.controls.password.setValidators([Validators.maxLength(250), Validators.minLength(6)]);
      this.form.controls.password.updateValueAndValidity();
      this.form.controls.phone.patchValue(this.user.phone);
      this.form.controls.phoneTypeId.patchValue(this.user.phoneTypeId);
    }
  }

  /**
   * Submit event of form
   */
  async onSubmit() {
    if (this.form.valid) {
      this.changeStateForm(true);
      try {
        const user = this.prepareRecord();
        await (this.user._id ? this.userService.update(Object.assign(user, {_id: this.user._id})) : this.userService.create(user));
        this.notificationsService.success('Felicidades', `Usuario ${ this.user._id ? 'actualizado' : 'creado'} con éxito.`);
        this.closeModal(true);
      } catch (error) {
        this.changeStateForm(false);
        console.warn('Error@UserManagerModalComponent@onSubmit:', error);
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

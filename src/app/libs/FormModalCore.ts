import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Libs
 */
import { ModalCore } from './ModalCore';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export class FormModalCore extends ModalCore implements OnInit  {

  /* Form group object */
  form: FormGroup;

  controlField: IControlField;

  constructor(
    protected fb: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {
    this.buildForm();
    this.prepareForm();
  }

  /**
   * Build reactive form
   */
  protected buildForm(): void {
    this.form = this.fb.group(this.controlField.fields);
  }

  protected prepareForm() {}

  /**
   * Change enable form
   * @param value: value
   */
  protected changeStateForm(value: boolean): void {
    if (!value) {
      this.loader = value;
      this.form.enable();
      this.afterEnable();
    } else {
      this.loader = value;
      this.form.disable();
      this.afterDisable();
    }
  }

  /**
   * After enable state form
   */
  protected afterEnable(): void {}

  /**
   * After disable state form
   */
  protected afterDisable(): void {}

  /**
   * Prepare target record
   */
  protected prepareRecord(): any {
    const record: any = this.form.value;
    return record;
  }

}

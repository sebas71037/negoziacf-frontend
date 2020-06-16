import { Validators } from '@angular/forms';

/**
 * Interfaces
 */
import { IControlField } from '@interface/IControlField';

export const controlField: IControlField = {
  messages: {
    email: {
      email: 'Correo electrónico inválido.',
      required: 'Campo requerido.'
    },
    password: {
      required: 'Campo requerida.',
      minlength: 'No es lo suficientemente larga, mínimo 6 caracteres.'
    }
  },
  fields: {
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  }
};

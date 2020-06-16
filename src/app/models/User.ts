/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/**
 * Models
 */
import { PhoneType } from './PhoneType';

export interface User extends ModelInterface {
  name?: string;
  lastname?: string;
  email?: string;
  sex?: number;
  password?: string;
  phone?: string;
  phoneTypeId?: number;
  phoneType?: PhoneType;
}

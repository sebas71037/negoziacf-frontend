
/**
 * Models
 */
import { PhoneType } from '@model/PhoneType';

export const data: {
  phoneTypeList: PhoneType[]
} = {
  phoneTypeList: [{
    _id: 1,
    name: 'CASA',
    created: new Date(),
    updated: new Date()
  },
  {
    _id: 2,
    name: 'CELULAR',
    created: new Date(),
    updated: new Date()
  },
  {
    _id: 3,
    name: 'TRABAJO',
    created: new Date(),
    updated: new Date()
  },
  {
    _id: 4,
    name: 'OTROS',
    created: new Date(),
    updated: new Date()
  }]
};

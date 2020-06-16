
/**
 * Models
 */
import { User } from '@model/User';

export const data: {
  userList: User[]
} = {
  userList: [{
    _id: '1',
    name: 'Sebastian',
    email: 'sebas71037@gmail.com',
    lastname: 'Vargas',
    sex: 0,
    phone: '1234567',
    phoneTypeId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    _id: '2',
    name: 'Andres',
    email: 'andres@gmail.com',
    lastname: 'Guerra',
    sex: 0,
    phone: '1234567',
    phoneTypeId: 2,
    created: new Date(),
    updated: new Date()
  },
  {
    _id: '3',
    name: 'Daniel',
    email: 'daniel@gmail.com',
    lastname: 'Martinez',
    sex: 0,
    phone: '1234567',
    phoneTypeId: 3,
    created: new Date(),
    updated: new Date()
  },
  {
    _id: '4',
    name: 'Catalina',
    email: 'cata@gmail.com',
    lastname: 'Valencia',
    sex: 1,
    phone: '1234567',
    phoneTypeId: 4,
    created: new Date(),
    updated: new Date()
  }]
};

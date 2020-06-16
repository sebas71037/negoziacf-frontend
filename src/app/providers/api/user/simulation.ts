/**
 * Libraries
 */
import { SimulationCore } from '@lib/SimulationCore';

/* Jsons */
import { data } from './data';

/**
 * Models
 */
import { User } from '@model/User';

export class Simulation extends SimulationCore {

  /* Temporal `User` records */
  protected recordList: User[] = data.userList;

  /* Key module */
  protected keyModule = 'user';

  constructor() {
    super();
  }
}

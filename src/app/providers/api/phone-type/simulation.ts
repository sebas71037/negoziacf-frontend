/**
 * Libraries
 */
import { SimulationCore } from '@lib/SimulationCore';

/* Jsons */
import { data } from './data';

/**
 * Models
 */
import { PhoneType } from '@model/PhoneType';

export class Simulation extends SimulationCore {

  /* Temporal `PhoneType` records */
  protected recordList: PhoneType[] = data.phoneTypeList;

  /* Key module */
  protected keyModule = 'phoneType';

  constructor() {
    super();
  }
}

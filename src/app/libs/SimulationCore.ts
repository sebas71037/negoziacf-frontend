import { AppSettings } from '../app-settings';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';

export class SimulationCore {

  /* Record list */
  protected recordList: any[] = [];

  /* Key module */
  protected keyModule = 'record';

  constructor() {}

  /**
   * Get configuration enviroment of simulation time
   */
  protected get SIMULATION_TIME(): number {
    return AppSettings.SIMULATION_TIME;
  }

  /**
   * Get response object
   */
  protected getResponse(): IResponse {
    return {data: {}, msg: '', error: '' };
  }

  /**
   * Get all record list
   */
  getAll(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[`${this.keyModule}List`] = [].concat(this.recordList);
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  /**
   * Get all record list by relationship
   */
  getByRelationship(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[`${this.keyModule}List`] = [].concat(this.recordList);
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  /**
   * Create record
   * @param record: Body of record
   */
  create(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  /**
   * Update `record
   * @param record: Body of record
   */
  update(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, 500);
    });
  }

  /**
   * Get all record list by pagination
   */
  getPagination(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[`${this.keyModule}List`] = [].concat(this.recordList);
        response.data.count = [].concat(this.recordList.length + 100);
        return resolve(response);
      }, 500);
    });
  }

  /**
   * Delete `record
   * @param record: Body of record
   */
  delete(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, 500);
    });
  }
}

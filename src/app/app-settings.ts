import { environment } from '../environments/environment';

export class AppSettings {

  /**
   * Get enviroment of api
   */
  public static get URL_API() {
    return environment.backendUrl;
  }

  /**
   * Get enviroment of prefix
   */
  public static get PREFIX() {
    return environment.prefix;
  }

  /**
   * Get enviroment of simulation
   */
  public static get SIMULATION() {
    return environment.simulation;
  }

  /**
   * Get enviroment of simulation time
   */
  public static get SIMULATION_TIME(): number {
    return environment.simulationTime;
  }

}

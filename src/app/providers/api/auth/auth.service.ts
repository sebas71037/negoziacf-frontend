import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Libraries
 */
import { ApiServiceCore } from '@lib/ApiServiceCore';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';

/**
 * Models
 */
import { User } from '@model/User';

/**
 * Simulation
 */
import { Simulation } from './simulation';
import { AppSettings } from 'src/app/app-settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation;

  /* Endpoint */
  protected endpoint = '/auth';

  /* Key module */
  protected keyModule = 'user';

  constructor(
    protected storageService: StorageService,
    protected router: Router,
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
    this.simulation = new Simulation(storageService, router);
  }


  /**
   * Log out of platform
   */
  logout(): void {
    this.storageService.cleanStorage();
    this.router.navigate(['/login']);
  }

  /**
   * Login auth user
   * @param email: Email of `User` record
   * @param password: Password of `User` record
   */
  async login(email: string, password: string): Promise<IResponse> {
    try {
      if (AppSettings.SIMULATION) {
        return this.simulation.login(email);
      }
      const body = { email, password };
      const response = await this.restMiddleware.postRequest(this.endpoint, body);
      this.router.navigate(['/']);
      this.saveLogin(response.data.token, response.data.user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Register auth user
   * @param user: `User` record
   */
  async register(user: User): Promise<IResponse> {
    try {
      if (AppSettings.SIMULATION) {
        return this.simulation.register(user);
      }
      const body = user;
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/register`, body);
      this.router.navigate(['/']);
      this.saveLogin(response.data.token, response.data.user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Save login session
   * @param token: Token session
   * @param user: `User` record
   */
  private saveLogin(token: string, user: User): void {
    this.storageService.setToken(token);
    this.storageService.setName(user.name);
    this.storageService.setLastname(user.lastname);
    this.storageService.setEmail(user.email);
    this.router.navigate(['/']);
  }

}

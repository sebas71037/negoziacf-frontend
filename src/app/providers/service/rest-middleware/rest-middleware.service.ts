import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app-settings';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';

@Injectable({
  providedIn: 'root'
})
export class RestMiddlewareService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Execute GET request
   * @param route: Route of backend api
   * @param options: Option request object
   */
  getRequest(route: string, options: {} = {}): Promise<IResponse> {
    return this.http.get(`${AppSettings.URL_API}${route}`, options).toPromise();
  }

  /**
   * Execute POST request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  postRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.post(`${AppSettings.URL_API}${route}`, body, options).toPromise();
  }

  /**
   * Execute PUT request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  putRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.put(`${AppSettings.URL_API}${route}`, body, options).toPromise();
  }

  /**
   * Execute PATCH request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  patchRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.patch(`${AppSettings.URL_API}${route}`, body, options).toPromise();
  }

  /**
   * Execute DELETe request
   * @param route: Route of backend api
  * @param options: Option request object
   */
  deleteRequest(route: string, options: {} = {}): Promise<IResponse> {
    return this.http.delete(`${AppSettings.URL_API}${route}`, options).toPromise();
  }

}

import { Injectable } from '@angular/core';

/**
 * Libraries
 */
import { ApiServiceCore  } from '@lib/ApiServiceCore';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/**
 * Simulation
 */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/user';

  /* Key module */
  protected keyModule = 'user';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}

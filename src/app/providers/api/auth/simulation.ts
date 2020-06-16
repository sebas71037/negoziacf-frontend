import { Router } from '@angular/router';

/**
 * Libraries
 */
import { SimulationCore } from '@lib/SimulationCore';

/**
 * Models
 */
import { User } from '@model/User';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

/**
 * Interaces
 */
import { IResponse } from '@interface/IResponse';

/* Jsons */
import { data } from '../user/data';

export class Simulation extends SimulationCore {

  /* Temporal `User` records */
  protected recordList: User[] = data.userList;

  /* Key module */
  protected keyModule = 'user';

  constructor(
    protected storageService: StorageService,
    protected router: Router,
  ) {
    super();
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

  /**
   * Login auth user
   * @param email: Email of `User` record
   */
  login(email: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const token = 'FSFS#"!$$%#SF';
        const user = this.recordList.find(target => target.email === email);
        if (!user) {
          return reject({error: { slug: 'user-not-found', msg: 'User not found' }});
        }
        this.saveLogin(token, user);
        return resolve({data: {user, token } });
      }, 500);
    });
  }

  /**
   * Regiter auth user
   * @param user: `User` record
   */
  register(user: User): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const token = 'FSFS#"!$$%#SF';
        this.saveLogin(token, user);
        return resolve({data: {user, token } });
      }, 500);
    });
  }

}

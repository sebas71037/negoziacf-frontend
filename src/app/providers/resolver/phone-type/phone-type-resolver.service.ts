import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Api
 */
import { PhoneTypeService } from '@api/phone-type/phone-type.service';

/**
 * Models
 */
import { PhoneType } from '@model/PhoneType';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';

@Injectable({
  providedIn: 'root'
})
export class PhoneTypeResolverService implements Resolve<PhoneType[]> {

  constructor(
    private phoneTypeService: PhoneTypeService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhoneType[]> | Observable<never> {
    return new Observable<PhoneType[]>((subscriber) => {
      this.phoneTypeService.getAll()
        .then((response: IResponse) => {
          const phoneTypeList: PhoneType[] = response.data.phoneTypeList;
          subscriber.next(phoneTypeList);
          subscriber.complete();
        })
        .catch((error) => {
          console.warn('Error@PhoneTypeResolverService@resolve:', error);
        });
    });
  }
}

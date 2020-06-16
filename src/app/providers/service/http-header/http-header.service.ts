import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/app/app-settings';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

/**
 * Interfaces
 */
import { IHeaders } from '@interface/IHeaders';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderService {

  private deniedHeaderList = ['METHOD-DENIED'];

  constructor(
    private storageService: StorageService,
  ) { }

  /**
   * Prepare public header list
   * @param headerList: Header list
   */
  preparePublicHeaderList(headerList: IHeaders): void {
    headerList[ `${AppSettings.PREFIX}Client-Date`] = new Date().toString();
  }

  /**
   * Prepare private header list
   * @param headerList: Header list
   */
   preparePrivateHeaderList(headerList: IHeaders): void {
    const token = this.storageService.getToken();
    if (token) {
      headerList[ `${AppSettings.PREFIX}Authorization`] = `${token}`;
    }
  }

  /**
   * Prepare post/put/patch header list
   * @param method: Method of Request
   * @param headerList: Header list
   * @param headers: Incoming HttpHeader object
   */
  prepareMethodHeaderList(method: string, headerList: IHeaders, headers: HttpHeaders): void {
    if (headers.get('METHOD-DENIED')) {
      return;
    }
    switch (method) {
      case 'POST':
        headerList['Content-Type'] = 'application/json';
        break;
      case 'PUT':
        headerList['Content-Type'] = 'application/json';
        break;
    }
  }

  /**
   * Merge http-header list
   * @param headers: Incoming HttpHeader object
   * @param headerList: Header list
   */
  mergetHeaderList(headers: HttpHeaders, headerList: IHeaders): void {
    for (const key of headers.keys()) {
      headerList[key] = headers.get(key);
    }
    this.cleanDeniedHeaderList(headerList);
  }

  /**
   * Remove denied header list
   * @param headerList: Header list
   */
  private cleanDeniedHeaderList(headerList: IHeaders): void {
    for (const deniedHeader of this.deniedHeaderList) {
      delete headerList[deniedHeader];
    }
  }

}

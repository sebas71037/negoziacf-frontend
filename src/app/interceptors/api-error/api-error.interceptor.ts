import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Modules
 */
import { NotificationsService } from 'angular2-notifications';

/**
 * Interfaces
 */
import { IErrorResponse } from '@interface/IErrorResponse';
import { IErrorMessage } from '@interface/IErrorMessage';

/**
 * Error message
 */
import { ERROR_MESSAGE } from './error-message';

/**
 * Services
 */
import { ManageApiErrorService } from '@service/manage-api-error/manage-api-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(
    private notificationsService: NotificationsService,
    private manageApiErrorService: ManageApiErrorService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        // let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          /* client-side error */
        } else {
          /* server-side error */
          this.evaluateError(error);
        }
        return throwError(error);
      })
    );
  }

  /**
   * Check error response from server side
   * @param error: Http error response object
   */
  private evaluateError(error: HttpErrorResponse): void {
    if (!error) {
      return;
    }
    const errorBody: IErrorResponse = error.error;

    const errorMessage: IErrorMessage = ERROR_MESSAGE[errorBody.slug];
    if (errorMessage) {
      this.notificationsService.warn(errorMessage.title || 'Atención', errorMessage.description);
    } else {
      this.notificationsService.error('Ups!', 'Ha ocurrido un error, intentalo de nuevo más tarde.');
    }

    this.manageApiErrorService.emitIncomingErrorResponse(errorBody);
  }
}

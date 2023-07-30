import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, tap, catchError, EMPTY } from 'rxjs';
import { APP_URL } from './constants/constants';
import { Provider } from '@angular/core';

export class AppInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let request = req;
        if (req.url.startsWith('/api')) {
            request = req.clone({
                url: req.url.replace('/api', APP_URL)
            })
        }
        return next.handle(request).pipe(
            tap(req => {
                if (req instanceof HttpRequest) {
                    console.log(req);
                }
            }),
            catchError((err) => {
                console.log('Error from Interceptor: ', JSON.stringify(err));         
                return EMPTY;
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor
}
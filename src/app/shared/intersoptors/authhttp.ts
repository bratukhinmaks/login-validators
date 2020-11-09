import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class Authhttp implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true
    });
    return next.handle(req);
  }
}

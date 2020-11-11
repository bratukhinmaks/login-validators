import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {EmailService} from './email.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private email: EmailService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.email.getMail(route.params.id).pipe(
      catchError((err) => {
        this.router.navigate(['/inbox/not-found']);
        return throwError(err)
      })
    );
  }
}

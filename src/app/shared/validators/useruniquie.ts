import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsyncValidator, FormControl, ValidationErrors} from '@angular/forms';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, debounce, debounceTime, map, throttleTime} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class Useruniquie implements AsyncValidator {
  constructor(private auth: AuthService) {
  }

  validate = (control: FormControl): Observable<ValidationErrors | null> => {
    return this.auth.usernameCheck(control.value)
      .pipe(
        debounceTime(500),
        map(v => null),
        catchError((err) => {
          if(err.error.username) {
            return of({nonUique: true});
          } else {
            return of({noConnection: true});
          }
        }),
      );
  };
}

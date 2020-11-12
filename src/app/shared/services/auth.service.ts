import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  username: string;

  constructor(private http: HttpClient) {
  }

  usernameCheck(username: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/username`, {username});
  }

  singup(form): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/signup`, form).pipe(
      tap(({username}) => {this.username = username; console.log(this.username)})
    );
  }

  singin(form): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/signin`, form).pipe(
      tap(({username}) => {this.username = username; console.log(this.username)})
    );
  }

  singout(): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/signout`, {});
  }

  isSingedIn(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/auth/signedin`).pipe(
      tap(({username}) => {this.username = username; console.log(this.username)})
    );
  }
}

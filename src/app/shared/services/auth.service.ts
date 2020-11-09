import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor(private http: HttpClient) {
  }

  usernameCheck(username: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/username`, { username});
  }

  singup(form): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/signup`, form)
  }

  singin(form): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/signin`, form);
  }
  singout(): Observable<any>{
    return this.http.post(`${environment.baseUrl}/auth/signout`, {});
}
  isSingedIn(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/auth/signedin`);
  }
}

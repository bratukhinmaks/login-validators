import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  usernameCheck(username: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/username`, {username: username});
  }
}

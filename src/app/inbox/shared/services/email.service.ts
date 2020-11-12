import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  getMails(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/emails`);
  }

  getMail(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/emails/${id}`);
  }

  sendMail(mail: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/emails`, mail);
  }
}

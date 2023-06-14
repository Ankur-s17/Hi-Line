import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  onLogin(obj: any): Observable<any> {
    console.log(obj);
    const headers = {
      'rest-api-key': '4d717e90-7323-423c-b198-47eabe4975a5',
    };
    return this.http.post(
      'https://sis.hi-line.com/dev/api/api/user/login',
      obj, {headers}
    );
  }
}

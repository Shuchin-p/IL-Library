import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http,Response, Request, RequestMethod, RequestOptions } from "@angular/http";
import 'node_modules/rxjs/operator/map';
import { UserLogin } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = "localhost:53409/api/user/login";

  constructor(private http: HttpClient) {
  }

  tryLogin(userLogin: UserLogin) {
    const loginBody: UserLogin = {
      email: userLogin.email,
      otp: userLogin.otp
    }
    var header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl, loginBody);
  }
}

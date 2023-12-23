import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.baseUrl;
  private registerUrl ="https://wordpress-494181-4043105.cloudwaysapps.com/"
  constructor(private httpc: HttpClient) { }
  Login(body): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<any>(this.baseUrl +
      `/auth/login`, body, { headers: headers });
  }
  Register(body): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.post<any>(this.registerUrl +
      `/auth/signup`, body, { headers: headers });
  }
}

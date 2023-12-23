import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = environment.baseUrl;
  constructor(private httpc: HttpClient) { }
  allMarkets(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<any>(this.baseUrl +
      `courses`, { headers: headers });
  }
  allQuestions(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<any>(this.baseUrl +
      `courses`, { headers: headers });
  }
}

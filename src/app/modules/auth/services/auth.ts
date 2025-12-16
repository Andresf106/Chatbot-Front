import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  public register(data: any): Observable<any> {
    return this._http.post<any>(this.apiUrl + "usuarios/", data);
  }

  public login(data: any): Observable<any> {
    return this._http.get<any>(this.apiUrl + "login", data);
  }

}

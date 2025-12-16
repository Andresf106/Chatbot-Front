import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environment/environment';

export interface ChatResponse {
  respuesta: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  sendMessage(data:any): Observable<any> {
    return this._http.post<any>(this.apiUrl + "/chat", data);
  }

}

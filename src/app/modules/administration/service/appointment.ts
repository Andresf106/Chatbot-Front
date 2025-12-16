import {Injectable} from '@angular/core';
import {environment} from '../../../../environment/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  public getAllCitas(): Observable<any> {
    return this._http.get<any>(this.apiUrl + "/citas/");
  }

  public reguisterCitas(data: any): Observable<any> {
    return this._http.post<any>(this.apiUrl + "/citas/", data);
  }

}

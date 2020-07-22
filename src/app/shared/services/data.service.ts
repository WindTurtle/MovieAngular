import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

let urlAPI = '';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlAPI = environment.urlApi;
  }

  post(url: string, data?: object): Observable<any> {
    return this.http.post(urlAPI + '/' + url, data).pipe(
      tap((data: any) => {}),
      catchError((err) => {
        return err;
      })
    );
  }
  postWithHeader(url: string, data?: object): Observable<any> {
    return this.http.post(urlAPI + '/' + url, data, httpOptions).pipe(
      tap((data: any) => {}),
      catchError((err) => {
        return err;
      })
    );
  }
}

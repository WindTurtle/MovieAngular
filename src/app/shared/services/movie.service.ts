import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

let urlAPI = '';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private detailMovie = new BehaviorSubject({} as Object); // state={}
  ShareDetailMovie = this.detailMovie.asObservable(); // state={movie:{}}
  constructor(private http: HttpClient) {
    urlAPI = environment.urlApi;
  }

  get(url: string): Observable<any> {
    return this.http.get(urlAPI + '/' + url).pipe(
      tap((data: any) => {
        //Loading
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  sharingDataDetailMovie(movie) {
    this.detailMovie.next(movie);
  }
  
}

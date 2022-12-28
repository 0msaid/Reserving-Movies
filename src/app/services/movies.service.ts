import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  url:string = `https://api.themoviedb.org/3/movie/now_playing?api_key=a1bc505bd9d0095c403fb9d28fa78923`

getMovies(): Observable<any[]> {
  return this.http.get<any[]>(this.url).pipe(
    catchError((error) => {
      return throwError(() => error.message || 'some error from server ');
    })
  );
}

}


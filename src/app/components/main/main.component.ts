import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies: any = {};
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500';
  errorMag: string = '';
  selectedMovie:any={};

  sendMovie(movie:any){
    this.selectedMovie=movie;
    console.log(this.selectedMovie);
    

  }
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        this.errorMag = error;
      }
    );
  }
}

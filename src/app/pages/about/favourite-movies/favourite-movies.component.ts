import { Component } from '@angular/core';
import  { FavouriteMoviesService } from "../../../shared/services/favourite-movies.service";
import {Movie} from "../../../shared/models/movie";

@Component({
  selector: 'app-favourite-movies',
  standalone: true,
  imports: [],
  templateUrl: './favourite-movies.component.html',
  styleUrl: './favourite-movies.component.css'
})
export class FavouriteMoviesComponent {
  movies: Movie[] = [];

  constructor(private moviesService: FavouriteMoviesService) {
  }

  ngOnInit(){
    this.moviesService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
}

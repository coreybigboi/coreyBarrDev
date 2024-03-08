import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import  { FavouriteMoviesService } from "../../../shared/services/favourite-movies.service";
import { Movie } from "../../../shared/models/movie";

@Component({
  selector: 'app-favourite-movies',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatProgressBar
  ],
  templateUrl: './favourite-movies.component.html',
  styleUrl: './favourite-movies.component.css'
})
export class FavouriteMoviesComponent {
  movies: Movie[] = [];

  constructor(private moviesService: FavouriteMoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
}

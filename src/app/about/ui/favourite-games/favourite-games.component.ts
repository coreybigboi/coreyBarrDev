import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FavouriteGamesService } from "../../data-access/favourite-games.service";
import { Game } from "../../../shared/models/game";

@Component({
  selector: 'app-favourite-games',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatProgressBar
  ],
  templateUrl: './favourite-games.component.html',
  styleUrl: './favourite-games.component.css'
})
export class FavouriteGamesComponent {
  games: Game[];

  constructor(private gamesService: FavouriteGamesService) {
    this.games = [];
  }

  ngOnInit(){
    this.gamesService.getGames().subscribe((data: Game[]) => {
      this.games = data;
    });
  }
}

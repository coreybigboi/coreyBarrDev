import { Component } from '@angular/core';
import { FavouriteGamesService } from "../../../shared/services/favourite-games.service";
import { Game } from "../../../shared/models/game";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-favourite-games',
  standalone: true,
  imports: [NgFor],
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

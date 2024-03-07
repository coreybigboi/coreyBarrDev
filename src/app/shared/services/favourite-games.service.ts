import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Game } from "../models/game";
import { Observable } from "rxjs";
import { delay } from 'rxjs';

const PATH = './assets/data/games.json';

@Injectable({
  providedIn: 'root'
})
export class FavouriteGamesService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PATH).pipe(delay(5000));
  }
}

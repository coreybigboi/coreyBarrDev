import { Component } from '@angular/core';
import { MatTabsModule } from "@angular/material/tabs";
import { FavouriteSoundsComponent } from "./favourite-sounds/favourite-sounds.component";
import { FavouriteMoviesComponent } from "./favourite-movies/favourite-movies.component";
import { FavouriteGamesComponent } from "./favourite-games/favourite-games.component";
@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        MatTabsModule,
        FavouriteSoundsComponent,
        FavouriteMoviesComponent,
        FavouriteGamesComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}

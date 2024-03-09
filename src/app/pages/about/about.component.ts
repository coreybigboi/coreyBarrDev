import { Component } from '@angular/core';
import { MatTabsModule } from "@angular/material/tabs";
import { FavouriteSoundsComponent } from "./favourite-sounds/favourite-sounds.component";
import { FavouriteMoviesComponent } from "./favourite-movies/favourite-movies.component";
import { FavouriteGamesComponent } from "./favourite-games/favourite-games.component";
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { AnimatedTextComponent } from '../../shared/components/animated-text/animated-text.component';
import { Colours } from '../../shared/enums/colours';
import { TerminalTextComponent } from '../../shared/components/terminal-text/terminal-text.component';

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        MatTabsModule,
        FavouriteSoundsComponent,
        FavouriteMoviesComponent,
        FavouriteGamesComponent,
        ColouredBoxComponent,
        AnimatedTextComponent,
        TerminalTextComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly Dialogue = "I don't know what to say about myself, so instead I'll share some of my favourite stuff. ¯\\_(ツ)_/¯ ";
  readonly terminalText = ["About me"];
  readonly Blue = Colours.Blue;
}

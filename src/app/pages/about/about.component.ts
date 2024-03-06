import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {FavouriteSoundsComponent} from "./favourite-sounds/favourite-sounds.component";
@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        MatTabsModule,
        FavouriteSoundsComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}

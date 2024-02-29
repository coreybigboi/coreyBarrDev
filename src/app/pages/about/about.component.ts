import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Sound} from "../../shared/models/sound";
import {NgFor} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {FavouriteSoundsService} from "../../shared/services/favourite-sounds.service";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        NgForOf,
        NgFor,
        MatTabsModule
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  soundsList: Sound[];

  constructor(private soundService: FavouriteSoundsService) {
    this.soundsList = [];
  }

  ngOnInit(): void{
    this.soundService.getSounds().subscribe((data: Sound[]) => {
      this.soundsList = data;
    });
  }
}

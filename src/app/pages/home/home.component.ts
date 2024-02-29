import { Component } from '@angular/core';
import {FavouriteSoundsService} from "../../shared/services/favourite-sounds.service";
import {Sound} from "../../shared/models/sound";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

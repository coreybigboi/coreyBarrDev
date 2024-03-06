import { Component } from '@angular/core';
import { Sound } from "../../../shared/models/sound";
import { NgFor } from "@angular/common";
import { FavouriteSoundsService } from "../../../shared/services/favourite-sounds.service";

@Component({
  selector: 'app-favourite-sounds',
  standalone: true,
  imports: [NgFor],
  templateUrl: './favourite-sounds.component.html',
  styleUrl: './favourite-sounds.component.css'
})
export class FavouriteSoundsComponent {
  soundsList: Sound[];

  constructor(private soundService: FavouriteSoundsService) {
    this.soundsList = [];
  }

  ngOnInit(): void {
    this.soundService.getSounds().subscribe((data: Sound[]) => {
      this.soundsList = data;
    });
  }
}

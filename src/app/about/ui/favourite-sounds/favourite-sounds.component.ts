import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Sound } from "../../../shared/models/sound";
import { FavouriteSoundsService } from "../../data-access/favourite-sounds.service";

@Component({
  selector: 'app-favourite-sounds',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatProgressBar
  ],
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

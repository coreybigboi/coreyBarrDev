import { Component } from '@angular/core';
import { Job } from '../../shared/models/job';
import { ExperienceService } from "../../shared/services/experience.service";
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { SortExperienceByYearPipe } from '../../shared/pipes/sort-experience-by-year.pipe';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { Colours } from '../../shared/enums/colours';
import { AnimatedTextComponent } from '../../shared/components/animated-text/animated-text.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    MatCardModule, 
    NgFor, 
    NgIf,
    SortExperienceByYearPipe,
    ColouredBoxComponent,
    AnimatedTextComponent,
    MatProgressBar
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly Dialogue = "Welcome to my job experience page! As you can see, I was a Blackjack dealer long before I wrote my first program and I haven't looked back since!";
  readonly Blue = Colours.Blue;
  
  jobs: Job[];
  
  constructor(private experienceService: ExperienceService){
    this.jobs = [];
  }

  ngOnInit(){
    this.experienceService.getExperience().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }
}

import { Component } from '@angular/core';
import { Job } from '../../shared/models/job';
import { ExperienceService } from './experience.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { SortExperienceByYearPipe } from '../../shared/pipes/sort-experience-by-year.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, NgFor, SortExperienceByYearPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs!: Job[];
  
  constructor(private experienceService: ExperienceService){
  }

  ngOnInit(){
    this.experienceService.getExperience().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }
}

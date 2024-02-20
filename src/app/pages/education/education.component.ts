import { Component } from '@angular/core';
import { EducationService } from './education.service';
import { Education } from '../../shared/models/education';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[];

  constructor(private educationService: EducationService){
    this.educationList = [];
  }

  ngOnInit(){
    this.educationService.getEducation().subscribe((data: Education[]) => {
      this.educationList = data;
    });
  }
}

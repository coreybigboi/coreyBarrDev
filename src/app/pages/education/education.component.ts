import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SortEducationByDatePipe } from '../../shared/pipes/sort-education-by-date.pipe';
import { EducationDownloadsComponent } from './education-downloads/education-downloads.component';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { AnimatedTextComponent } from '../../shared/components/animated-text/animated-text.component';
import { Colours } from '../../shared/enums/colours';
import { Education } from '../../shared/models/education';
import { EducationService} from "../../shared/services/education.service";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatCardModule, 
    NgFor, 
    MatButtonModule, 
    MatBottomSheetModule, 
    SortEducationByDatePipe,
    ColouredBoxComponent,
    AnimatedTextComponent,
    MatProgressBarModule,
    NgIf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly Dialogue = "My education is pretty standard, I finished year 12 in 2016 and eventually got around to finishing my CS degree in 2023. I was always pretty good in school, but nothing beats real world experience!";
  readonly Blue = Colours.Blue;
  
  educationList: Education[];

  constructor(private educationService: EducationService, private _bottomSheet: MatBottomSheet) {
    this.educationList = [];
  }

  ngOnInit(){
    this.educationService.getEducation().subscribe((data: Education[]) => {
      this.educationList = data;
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(EducationDownloadsComponent);
  }
}

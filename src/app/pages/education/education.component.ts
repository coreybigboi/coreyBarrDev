import { Component } from '@angular/core';
import { EducationService} from "../../shared/services/education.service";
import { Education } from '../../shared/models/education';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EducationDownloadsComponent } from './education-downloads/education-downloads.component';
import { MatButtonModule } from '@angular/material/button';
import { SortEducationByDatePipe } from '../../shared/pipes/sort-education-by-date.pipe';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { Colours } from '../../shared/enums/colours';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatCardModule, 
    NgFor, 
    MatButtonModule, 
    MatBottomSheetModule, 
    SortEducationByDatePipe,
    ColouredBoxComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  blue = Colours.Blue;
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

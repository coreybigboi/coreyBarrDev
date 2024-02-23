import { Pipe, PipeTransform } from '@angular/core';
import { Education } from '../models/education';

@Pipe({
  name: 'sortEducationByDate',
  standalone: true
})
export class SortEducationByDatePipe implements PipeTransform {

  transform(educationList: Education[]): Education[] {
    return educationList.sort((a, b): number => { return b.date - a.date});
  }
}

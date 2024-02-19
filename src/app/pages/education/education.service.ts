import { Injectable } from '@angular/core';
import { Education } from '../../shared/models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  async getEducation(): Promise<Education[]>{
    const response = await fetch('./assets/education.json');
    const result = await response.json();
    return result;
  }
}

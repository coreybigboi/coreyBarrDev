import { Injectable } from '@angular/core';
import { Education } from '../../shared/models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private dataPath = './assets/data/education.json';

  constructor() { }

  async getEducation(): Promise<Education[]>{
    const response = await fetch(this.dataPath);
    const result = await response.json();
    return result;
  }
}

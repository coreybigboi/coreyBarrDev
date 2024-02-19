import { Injectable } from '@angular/core';
import { Job } from '../../shared/models/job';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private dataPath = '/assets/data/jobs.json'; 

  constructor() { }

  async getExperience(): Promise<Job[]>{
    const response = await fetch(this.dataPath);
    const result = await response.json();
    return result;
  }
}

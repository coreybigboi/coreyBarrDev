import { Injectable } from '@angular/core';
import { Job } from '../../shared/models/job';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  async getExperience(): Promise<Job[]>{
    const response = await fetch('/assets/jobs.json');
    const result = await response.json();
    return result;
  }
}

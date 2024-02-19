import { Injectable } from '@angular/core';
import { Project } from '../../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private dataPath = './assets/data/projects.json';

  async getProjects(): Promise<Project[]>{
    const response = await fetch(this.dataPath);
    const result = await response.json();
    return result;
  }
}

import { Injectable } from '@angular/core';
import { Project } from '../../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  async getProjects(): Promise<Project[]>{
    const response = await fetch('./assets/projects.json');
    const result = await response.json();
    //let projects: Project[] =  await JSON.parse(jsonString as string) as Project[];
    //console.log(projects);
    //return projects;
    console.log(result);
    return result;
  }
}

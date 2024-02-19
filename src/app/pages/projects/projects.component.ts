import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../../shared/models/project';
import { NgFor } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService){
  }

  ngOnInit(){
    this.projectService.getProjects().then(result => {this.projects = result});
  }
}

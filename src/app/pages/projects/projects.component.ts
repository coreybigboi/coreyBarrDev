import { Component } from '@angular/core';
import { ProjectsService } from "../../shared/services/projects.service";
import { Project } from '../../shared/models/project';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ColouredBoxComponent } from '../../shared/components/coloured-box/coloured-box.component';
import { AnimatedTextComponent } from '../../shared/components/animated-text/animated-text.component';
import { TerminalTextComponent } from '../../shared/components/terminal-text/terminal-text.component';
import { SortProjectsByYearPipe } from '../../shared/pipes/sort-projects-by-year.pipe';
import { Colours } from '../../shared/enums/colours';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgFor, 
    NgIf,
    MatCardModule, 
    MatButtonModule, 
    MatProgressBar,
    ColouredBoxComponent,
    AnimatedTextComponent,
    TerminalTextComponent,
    SortProjectsByYearPipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly Dialogue = "My favourite aspect of programming is being able to create almost anything that I can think of. Here are some of my personal favourite projects."
  readonly TerminalText = ["My Projects"];
  readonly Blue = Colours.Blue;

  projects: Project[];

  constructor(private projectService: ProjectsService) {
    this.projects = [];
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    })
  }
}

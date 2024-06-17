import { Routes } from '@angular/router';
import { HomeComponent } from './home/feature/home.component';
import { ProjectsComponent } from './projects/feature/projects.component';
import { EducationComponent } from './education/feature/education.component';
import { ExperienceComponent } from './experience/feature/experience.component';
import { AboutComponent } from './about/feature/about.component';
import { KeyboardsComponent } from './keyboards/feature/keyboards.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'keyboards', component: KeyboardsComponent}
];

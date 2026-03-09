import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClient } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsListComponent },
      { path: 'project/:id', component: ProjectDetailComponent },
      { path: 'skills', component: SkillsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
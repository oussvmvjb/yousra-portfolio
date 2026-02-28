import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// جميع المكونات
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SkillsComponent } from './components/skills/skills.component';

// دالة لتهيئة Http Loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); // فقط http
}

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HomeComponent,
    ProjectsListComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
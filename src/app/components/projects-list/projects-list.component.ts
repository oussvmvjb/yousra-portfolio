import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  currentLang: string = 'fr';

  constructor(
    private dataService: DataService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.loadData();
    });
  }

  private loadData() {
    this.projects = this.dataService.getProjectsByLocale(this.currentLang);
  }

  getProjectImage(project: Project): string {
    return project.image ?
      `assets/uploads/projects/${project.image}` :
      'assets/uploads/projects/abstract/project-web.svg';
  }

  formatYear(dateString: string): string {
    return new Date(dateString).getFullYear().toString();
  }

  getDelay(index: number): number {
    return index * 0.1;
  }
}
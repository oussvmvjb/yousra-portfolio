import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;
  currentLang: string = 'fr';
  loading = true;

  techIcons: { [key: string]: string } = {
    'php': 'fab fa-php',
    'symfony': 'fab fa-symfony',
    'laravel': 'fab fa-laravel',
    'javascript': 'fab fa-js',
    'js': 'fab fa-js',
    'react': 'fab fa-react',
    'vue': 'fab fa-vuejs',
    'node': 'fab fa-node-js',
    'mysql': 'fas fa-database',
    'database': 'fas fa-database',
    'css': 'fab fa-css3-alt',
    'html': 'fab fa-html5',
    'bootstrap': 'fab fa-bootstrap',
    'github': 'fab fa-github',
    'docker': 'fab fa-docker',
    'python': 'fab fa-python'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.loadProject();
    });
  }

  private loadProject() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const projects = this.dataService.getProjectsByLocale(this.currentLang);
    this.project = projects.find(p => p.id === id) as Project;
    this.loading = false;

    if (!this.project) {
      this.router.navigate(['/404']);
    }
  }

  getTechList(): string[] {
    return this.project.technologie.split(',').map(t => t.trim());
  }

  getTechIcon(tech: string): string {
    const key = tech.toLowerCase().trim();
    return this.techIcons[key] || 'fas fa-code';
  }

  getProjectImages(): string[] {
    if (this.project.images && this.project.images.length > 0) {
      return this.project.images.map(img => `assets/uploads/projects/${img}`);
    }
    return this.project.image ? [`assets/uploads/projects/${this.project.image}`] : [];
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString(this.currentLang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}
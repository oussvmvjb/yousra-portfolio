import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { PersonalInfo } from '../../models/personal-info';
import { Education } from '../../models/education';
import { Experience } from '../../models/experience';
import { Project } from '../../models/project';
import { Skill } from '../../models/skill';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, AfterViewInit {
  personalInfo!: PersonalInfo;
  educations: Education[] = [];
  experiences: Experience[] = [];
  projects: Project[] = [];
  skills: Skill[] = [];

  currentLang: string = 'fr';

  techIcons: { [key: string]: string } = {
    'php': 'fab fa-php',
    'symfony': 'fab fa-symfony',
    'laravel': 'fab fa-laravel',
    'javascript': 'fab fa-js',
    'js': 'fab fa-js',
    'typescript': 'fab fa-js',
    'ts': 'fab fa-js',
    'react': 'fab fa-react',
    'react.js': 'fab fa-react',
    'vue': 'fab fa-vuejs',
    'angular': 'fab fa-angular',
    'node': 'fab fa-node-js',
    'mysql': 'fas fa-database',
    'postgresql': 'fas fa-database',
    'mongodb': 'fas fa-database',
    'database': 'fas fa-database',
    'css': 'fab fa-css3-alt',
    'html': 'fab fa-html5',
    'bootstrap': 'fab fa-bootstrap',
    'github': 'fab fa-github',
    'docker': 'fab fa-docker',
    'python': 'fab fa-python',
    'django': 'fab fa-python',
    'flask': 'fas fa-flask',
    'pytorch': 'fas fa-brain',
    'tensorflow': 'fas fa-microchip',
    'spring': 'fas fa-leaf',
    'spring boot': 'fas fa-leaf',
    'java': 'fab fa-java',
    'flutter': 'fas fa-mobile-alt',
    'dart': 'fas fa-bullseye',
    'figma': 'fab fa-figma',
    'git': 'fab fa-git-alt',
    'tailwind': 'fab fa-css3',
    'postman': 'fas fa-rocket'
  };

  categories = [
    { key: 'frontend', label: 'Front-end' },
    { key: 'backend', label: 'Back-end' },
    { key: 'data_db', label: 'AI & Database' }
  ];

  constructor(
    private dataService: DataService,
    private languageService: LanguageService,
    private translate: TranslateService,
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.loadData();
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initTypedEffect(), 100);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
      this.initTypedEffect();
    }
  }

  private loadData() {
    // Load personal info
    const personalInfos = this.dataService.getPersonalInfoByLocale(this.currentLang);
    this.loadPersonalInfo(personalInfos as PersonalInfo[]);

    // Load education
    this.educations = this.dataService.getEducationByLocale(this.currentLang);

    // Load experience
    this.experiences = this.dataService.getExperienceByLocale(this.currentLang);

    // Load projects
    this.projects = this.dataService.getProjectsByLocale(this.currentLang);

    // Load skills
    this.skills = this.dataService.getSkillsByLocale(this.currentLang);
  }

  private loadPersonalInfo(personalInfos: PersonalInfo[]) {
    this.personalInfo =
      personalInfos[0]
      ?? this.dataService.personalInfo[0];
  }

  private initTypedEffect() {
    const typingElement = document.getElementById('typed');
    if (typingElement) {
      this.translate.get([
        'hero.typed.developer',
        'hero.typed.designer',
        'hero.typed.innovator',
        'hero.typed.problem_solver'
      ]).subscribe((translations: any) => {
        // Clear previous instance if it exists
        if ((window as any).typedInstance) {
          (window as any).typedInstance.destroy();
        }

        (window as any).typedInstance = new Typed('#typed', {
          strings: Object.values(translations),
          typeSpeed: 100,
          backSpeed: 50,
          loop: true,
          cursorChar: '_'
        });
      });
    }
  }

  // helpers used by the template ------------------------------------------------

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getProfileImageUrl(): string {
    // return the URL of the profile picture, fallback if necessary
    return this.personalInfo.photoUrl || 'assets/uploads/images/yousra.jpg';
  }

  getSkillsByCategory(key: string): any[] {
    if (!this.skills) {
      return [];
    }
    return this.skills.filter((s: any) => s.categorie === key);
  }

  isAISkill(skill: any): boolean {
    return skill.nom?.toLowerCase().includes('ai');
  }

  getSkillIcon(skill: any): string {
    // map skill to a font‑awesome class or similar
    return skill.icon || 'fas fa-star';
  }

  isOdd(index: number): boolean {
    return index % 2 === 1;
  }

  getProjectImageUrl(project: any): string {
    return project.image ? `assets/uploads/projects/${project.image}` : 'assets/uploads/projects/abstract/project-web.svg';
  }
}
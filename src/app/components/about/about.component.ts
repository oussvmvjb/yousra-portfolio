import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { PersonalInfo } from '../../models/personal-info';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo!: PersonalInfo;
  skills: Skill[] = [];
  currentLang: string = 'fr';

  constructor(
    private dataService: DataService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.loadData();
    });
  }

  private loadData() {
    // Load personal info
    const personalInfos = this.dataService.getPersonalInfoByLocale(this.currentLang);
    const info = personalInfos[0] || this.dataService.personalInfo[0];
    this.personalInfo = { ...info, cvpath: info.cvpath || '' } as PersonalInfo;

    // Load skills (first 6 for display)
    this.skills = this.dataService.getSkillsByLocale(this.currentLang).slice(0, 6);
  }

  formatBirthday(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  getProfileImageUrl(): string {
    return this.personalInfo?.image ? 
      `assets/uploads/images/${this.personalInfo.image}` : 
      'assets/images/default-profile.jpg';
  }

  getCvUrl(): string {
    return this.personalInfo?.cvpath ? 
      `assets/uploads/cv/${this.personalInfo.cvpath}` : 
      '';
  }

  getSkillIcon(skill: Skill): string {
    return skill.image || 'fas fa-code';
  }
}
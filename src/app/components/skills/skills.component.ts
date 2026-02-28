import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
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
    this.skills = this.dataService.getSkillsByLocale(this.currentLang);
  }

  getSkillIcon(skill: Skill): string {
    return skill.image || 'fas fa-code';
  }

  getDelay(index: number): number {
    return index * 0.1;
  }
}
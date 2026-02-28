import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
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
    this.experiences = this.dataService.getExperienceByLocale(this.currentLang);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLang, {
      month: 'short',
      year: 'numeric'
    });
  }

  isPresent(dateString: string | null): boolean {
    return !dateString || dateString === '';
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }
}
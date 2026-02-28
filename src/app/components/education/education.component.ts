import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DataService } from '../../services/service.service';
import { LanguageService } from '../../services/language.service';
import { Education } from '../../models/education';
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  educations: Education[] = [];
  currentLang: string = 'fr';

  constructor(
    private dataService: DataService,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.loadData();
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.refresh();
    }
  }

  private loadData() {
    this.educations = this.dataService.getEducationByLocale(this.currentLang);
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

  getDelay(index: number): number {
    return (index + 1) * 100;
  }
}
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('fr');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor(
    @Inject(TranslateService) private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['fr', 'en', 'it']);
  }

  initLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'fr';
      this.changeLanguage(savedLang);
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }
  }

  get currentLang(): string {
    return this.currentLangSubject.value;
  }
}
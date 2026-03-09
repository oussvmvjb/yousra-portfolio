import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initTheme();
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }

  private initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      this.isDarkModeSubject.next(isDark);
      this.applyTheme(isDark);
    }
  }

  toggleTheme() {
    const newValue = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newValue);
    this.applyTheme(newValue);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark';
  private themeSubject = new BehaviorSubject<Theme>(this.getCurrentTheme());
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    // Initialize theme from localStorage or system preference
    this.setTheme(this.getCurrentTheme());
  }

  private getCurrentTheme(): Theme {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  public setTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add(this.darkThemeClass);
    } else {
      document.documentElement.classList.remove(this.darkThemeClass);
    }
  }

  public toggleTheme(): void {
    const currentTheme = this.themeSubject.value;
    this.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  public isDarkTheme(): boolean {
    return this.themeSubject.value === 'dark';
  }
}
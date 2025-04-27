import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'bn';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  public currentLanguage$: Observable<Language> = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    const defaultLang = savedLang || 'en';
    
    this.translate.setDefaultLang('en');
    this.setLanguage(defaultLang);
  }

  public setLanguage(lang: Language): void {
    localStorage.setItem('preferredLanguage', lang);
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
    document.documentElement.lang = lang;
    
    if (lang === 'bn') {
      document.body.classList.add('bengali');
    } else {
      document.body.classList.remove('bengali');
    }
  }

  public toggleLanguage(): void {
    const currentLang = this.currentLanguageSubject.value;
    const newLang: Language = currentLang === 'en' ? 'bn' : 'en';
    this.setLanguage(newLang);
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  public instant(key: string, params?: any): string {
    return this.translate.instant(key, params);
  }
}
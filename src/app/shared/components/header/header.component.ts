import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationsService } from '../../../core/services/i18n/translations.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  translationsService = inject(TranslationsService);

  navItems = [
    { path: '/', label: 'HOME', labelBn: 'হোম' },
    { path: '/artworks', label: 'ARTWORKS', labelBn: 'শিল্পকর্ম' },
    { path: '/photos', label: 'PHOTOS', labelBn: 'ছবি' },
    { path: '/videos', label: 'VIDEOS', labelBn: 'ভিডিও' },
    { path: '/writings', label: 'WRITINGS', labelBn: 'লেখা' },
    { path: '/interviews', label: 'INTERVIEWS', labelBn: 'সাক্ষাৎকার' },
    { path: '/timeline', label: 'TIMELINE', labelBn: 'টাইমলাইন' },
    { path: '/people', label: 'PEOPLE', labelBn: 'ব্যক্তিত্ব' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  toggleLanguage() {
    this.translationsService.toggleLanguage();
  }

  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}
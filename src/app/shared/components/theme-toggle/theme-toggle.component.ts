import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleTheme()"
            class="theme-toggle">
      <!-- Sun icon for dark mode -->
      <svg *ngIf="isDarkTheme()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <!-- Moon icon for light mode -->
      <svg *ngIf="!isDarkTheme()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  `,
  styles: [`
    .theme-toggle {
      padding: 0.5rem;
      border-radius: var(--radius-full);
      background-color: var(--color-bg-secondary);
      color: var(--color-text-primary);
      transition: all var(--transition-normal) var(--transition-timing);
    }
    
    .theme-toggle:hover {
      transform: scale(1.1);
    }
  `]
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
}
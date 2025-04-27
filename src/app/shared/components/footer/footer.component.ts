import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationsService } from '../../../core/services/i18n/translations.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  translationsService = inject(TranslationsService);
  currentYear = new Date().getFullYear();
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SeoService } from './core/services/seo/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  template: `
    <div *ngIf="loading" class="fixed inset-0 bg-neutral-900 z-50 grid place-items-center">
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-8"></div>
        <h2 class="text-3xl font-display text-white mb-3">36 JULY</h2>
        <p class="text-lg text-neutral-400">Loading digital archive...</p>
      </div>
    </div>
    <div [class.hidden]="loading">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {
  private seoService = inject(SeoService);
  loading = true;
  
  ngOnInit() {
    this.seoService.init();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
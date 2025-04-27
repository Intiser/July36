import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslationsService } from '../i18n/translations.service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translationsService: TranslationsService
  ) {}

  init() {
    // Update meta tags based on route data
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      const title = data['title'] || 'Strike 2024 Museum';
      this.updateTitle(title);
      
      if (data['description']) {
        this.updateDescription(data['description']);
      }
      
      if (data['keywords']) {
        this.updateKeywords(data['keywords']);
      }
    });

    // Listen for language changes to update meta tags
    this.translationsService.currentLanguage$.subscribe(() => {
      // Re-apply meta tags when language changes
      this.updateCurrentRouteMeta();
    });
  }

  private updateCurrentRouteMeta() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    
    if (route.snapshot.data['title']) {
      this.updateTitle(route.snapshot.data['title']);
    }
    
    if (route.snapshot.data['description']) {
      this.updateDescription(route.snapshot.data['description']);
    }
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
  }

  updateDescription(description: string) {
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }

  updateKeywords(keywords: string) {
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

  updateOgImage(imageUrl: string) {
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
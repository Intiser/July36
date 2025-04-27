import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';
import { DataService } from '../../core/services/data/data.service';

interface Writing {
  id: number;
  title: string;
  titleBn: string;
  author: string;
  authorBn: string;
  date: string;
  dateBn: string;
  excerpt: string;
  excerptBn: string;
  image: string;
  type: 'essay' | 'article' | 'personal';
  category: string;
  categoryBn: string;
}

@Component({
  selector: 'app-writings',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.css']
})
export class WritingsComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  writings: Writing[] = [];
  
  ngOnInit() {
    this.dataService.getWritings().subscribe(data => {
      this.writings = data.items;
    });
  }
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
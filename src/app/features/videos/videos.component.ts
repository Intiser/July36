import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';
import { DataService } from '../../core/services/data/data.service';

interface Video {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  date: string;
  dateBn: string;
  thumbnail: string;
  videoUrl: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  videos: Video[] = [];
  
  ngOnInit() {
    this.dataService.getVideos().subscribe(data => {
      this.videos = data.items;
    });
  }
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
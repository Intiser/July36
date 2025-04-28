import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ImageModalComponent } from '../../shared/components/image-modal/image-modal.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';
import { DataService } from '../../core/services/data/data.service';

interface Artwork {
  id: number;
  title: string;
  titleBn: string;
  artist: string;
  artistBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  type: string;
}

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ImageModalComponent
  ],
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  artworksByType: { [key: string]: Artwork[] } = {};
  artworkTypes: { [key: string]: { en: string; bn: string } } = {};
  selectedArtwork: Artwork | null = null;
  protected readonly Object = Object;
  
  ngOnInit() {
    this.dataService.getArtworks().subscribe(data => {
      this.artworkTypes = data.types;
      this.artworksByType = this.groupArtworksByType(data.items);
    });
  }
  
  private groupArtworksByType(artworks: Artwork[]): { [key: string]: Artwork[] } {
    return artworks.reduce((acc, artwork) => {
      if (!acc[artwork.type]) {
        acc[artwork.type] = [];
      }
      acc[artwork.type].push(artwork);
      return acc;
    }, {} as { [key: string]: Artwork[] });
  }
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
  
  getTypeLabel(type: string): string {
    return this.currentLanguage === 'en' 
      ? this.artworkTypes[type]?.en 
      : this.artworkTypes[type]?.bn;
  }

  openArtwork(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }

  closeArtwork(): void {
    this.selectedArtwork = null;
  }
}


 // {
    //   "id": 1,
    //   "title": "Voice of Freedom",
    //   "titleBn": "মুক্তির কণ্ঠস্বর",
    //   "artist": "Mahfuza Rahman",
    //   "artistBn": "মাহফুজা রহমান",
    //   "description": "Bold protest poster created during the early days of the movement",
    //   "descriptionBn": "আন্দোলনের প্রাথমিক দিনগুলিতে তৈরি করা বোল্ড প্রতিবাদ পোস্টার",
    //   "image": "https://images.pexels.com/photos/5626342/pexels-photo-5626342.jpeg",
    //   "type": "poster"
    // },
    // {
    //   "id": 2,
    //   "title": "Justice Now",
    //   "titleBn": "এখনই ন্যায়বিচার",
    //   "artist": "Rafiqul Islam",
    //   "artistBn": "রফিকুল ইসলাম",
    //   "description": "Striking red and black design demanding immediate justice",
    //   "descriptionBn": "অবিলম্বে ন্যায়বিচার দাবি করে আকর্ষণীয় লাল এবং কালো ডিজাইন",
    //   "image": "https://images.pexels.com/photos/8304855/pexels-photo-8304855.jpeg",
    //   "type": "poster"
    // },
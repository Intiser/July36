import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
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
    FooterComponent
  ],
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  artworksByType: { [key: string]: Artwork[] } = {};
  artworkTypes: { [key: string]: { en: string; bn: string } } = {};
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
}
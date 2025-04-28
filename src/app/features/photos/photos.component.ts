import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ImageModalComponent } from '../../shared/components/image-modal/image-modal.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';

interface Photo {
  id: number;
  title: string;
  titleBn: string;
  photographer: string;
  photographerBn: string;
  description: string;
  descriptionBn: string;
  location: string;
  locationBn: string;
  date: string;
  dateBn: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ImageModalComponent
  ],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  translationsService = inject(TranslationsService);

  selectedCategory: string = 'all';
  selectedPhoto: Photo | null = null;
  
  photos: Photo[] = [
    {
      id: 1,
      title: 'Students Occupy University Building',
      titleBn: 'শিক্ষার্থীরা বিশ্ববিদ্যালয় ভবন দখল করেছে',
      photographer: 'Mohammad Rahman',
      photographerBn: 'মোহাম্মদ রহমান',
      description: 'Students gathered on the rooftop of a university building with Bangladesh flags during the height of the protests',
      descriptionBn: 'আন্দোলনের চরম মুহূর্তে বিশ্ববিদ্যালয় ভবনের ছাদে বাংলাদেশের পতাকা নিয়ে সমবেত শিক্ষার্থীরা',
      location: 'Dhaka University',
      locationBn: 'ঢাকা বিশ্ববিদ্যালয়',
      date: 'July 20, 2024',
      dateBn: 'জুলাই ২০, ২০২৪',
      image: 'assets/images/hero-protest.jpg',
      category: 'demonstrations'
    },
    {
      id: 2,
      title: 'Mass Gathering at Shahbagh',
      titleBn: 'শাহবাগে গণসমাবেশ',
      photographer: 'Abdul Majid',
      photographerBn: 'আব্দুল মাজিদ',
      description: 'Thousands gathered at Shahbagh intersection in the largest demonstration of the movement',
      descriptionBn: 'আন্দোলনের সবচেয়ে বড় বিক্ষোভে শাহবাগ মোড়ে হাজার হাজার মানুষ জমায়েত হয়েছিল',
      location: 'Shahbagh, Dhaka',
      locationBn: 'শাহবাগ, ঢাকা',
      date: 'August 7, 2024',
      dateBn: 'আগস্ট ৭, ২০২৪',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      category: 'demonstrations'
    }
  ];
  
  categories = [
    { id: 'all', name: 'All Photos', nameBn: 'সব ছবি' },
    { id: 'demonstrations', name: 'Demonstrations', nameBn: 'বিক্ষোভ' },
    { id: 'confrontations', name: 'Confrontations', nameBn: 'সংঘর্ষ' },
    { id: 'leadership', name: 'Leadership', nameBn: 'নেতৃত্ব' },
    { id: 'silent', name: 'Silent Protests', nameBn: 'নীরব প্রতিবাদ' },
    { id: 'support', name: 'Support & Aid', nameBn: 'সহায়তা' }
  ];
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
  
  get filteredPhotos(): Photo[] {
    if (this.selectedCategory === 'all') {
      return this.photos;
    }
    
    return this.photos.filter(photo => photo.category === this.selectedCategory);
  }
  
  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  openPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }
}
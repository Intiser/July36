import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
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
    FooterComponent
  ],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  translationsService = inject(TranslationsService);

  selectedCategory: string = 'all';
  
  photos: Photo[] = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: 'Student Leaders Address Crowd',
      titleBn: 'ছাত্র নেতৃবৃন্দ জনতাকে সম্বোধন করছেন',
      photographer: 'Faria Islam',
      photographerBn: 'ফারিয়া ইসলাম',
      description: 'Student leaders addressing protesters at Dhaka University campus',
      descriptionBn: 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে বিক্ষোভকারীদের সম্বোধন করছেন ছাত্র নেতৃবৃন্দ',
      location: 'Dhaka University',
      locationBn: 'ঢাকা বিশ্ববিদ্যালয়',
      date: 'July 22, 2024',
      dateBn: 'জুলাই ২২, ২০২৪',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      category: 'leadership'
    },
    {
      id: 3,
      title: 'Human Chain Protest',
      titleBn: 'মানববন্ধন প্রতিবাদ',
      photographer: 'Kamal Hossain',
      photographerBn: 'কামাল হোসেন',
      description: 'Students forming a human chain along Dhaka-Chittagong highway',
      descriptionBn: 'ঢাকা-চট্টগ্রাম মহাসড়কে ছাত্রদের মানববন্ধন',
      location: 'Dhaka-Chittagong Highway',
      locationBn: 'ঢাকা-চট্টগ্রাম মহাসড়ক',
      date: 'July 28, 2024',
      dateBn: 'জুলাই ২৮, ২০২৪',
      image: 'https://images.pexels.com/photos/2962859/pexels-photo-2962859.jpeg',
      category: 'demonstrations'
    },
    {
      id: 4,
      title: 'Police Confrontation',
      titleBn: 'পুলিশের মুখোমুখি',
      photographer: 'Selim Ahmed',
      photographerBn: 'সেলিম আহমেদ',
      description: 'Tense moments as protesters face police barricades near parliament',
      descriptionBn: 'সংসদের কাছে পুলিশি ব্যারিকেডের মুখোমুখি হওয়া বিক্ষোভকারীদের উত্তেজক মুহূর্ত',
      location: 'Parliament Area, Dhaka',
      locationBn: 'সংসদ এলাকা, ঢাকা',
      date: 'July 30, 2024',
      dateBn: 'জুলাই ৩০, ২০২৪',
      image: 'https://images.pexels.com/photos/5869878/pexels-photo-5869878.jpeg',
      category: 'confrontations'
    },
    {
      id: 5,
      title: 'Silent Protest',
      titleBn: 'নীরব প্রতিবাদ',
      photographer: 'Rabeya Khatun',
      photographerBn: 'রাবেয়া খাতুন',
      description: 'Students in black clothing holding a silent protest after the internet shutdown',
      descriptionBn: 'ইন্টারনেট বন্ধের পর কালো পোশাকে ছাত্রদের নীরব প্রতিবাদ',
      location: 'Central Shaheed Minar, Dhaka',
      locationBn: 'কেন্দ্রীয় শহীদ মিনার, ঢাকা',
      date: 'August 2, 2024',
      dateBn: 'আগস্ট ২, ২০২৪',
      image: 'https://images.pexels.com/photos/4555525/pexels-photo-4555525.jpeg',
      category: 'silent'
    },
    {
      id: 6,
      title: 'Medical Volunteers',
      titleBn: 'মেডিকেল স্বেচ্ছাসেবক',
      photographer: 'Imran Khan',
      photographerBn: 'ইমরান খান',
      description: 'Medical students providing first aid to injured protesters',
      descriptionBn: 'আহত বিক্ষোভকারীদের প্রাথমিক চিকিৎসা দিচ্ছেন মেডিকেল ছাত্ররা',
      location: 'Rampura, Dhaka',
      locationBn: 'রামপুরা, ঢাকা',
      date: 'August 5, 2024',
      dateBn: 'আগস্ট ৫, ২০২৪',
      image: 'https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg',
      category: 'support'
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
}
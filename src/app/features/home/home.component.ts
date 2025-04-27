import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';

interface ExploreSection {
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private translationsService = inject(TranslationsService);
  
  sections: ExploreSection[] = [
    {
      title: 'ARTWORKS',
      titleBn: 'শিল্পকর্ম',
      description: 'Powerful paintings, posters, and digital art created during the movement.',
      descriptionBn: 'আন্দোলনের সময় তৈরি করা শক্তিশালী পেইন্টিং, পোস্টার এবং ডিজিটাল আর্ট।',
      route: '/artworks',
      image: 'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg'
    },
    {
      title: 'PHOTOS',
      titleBn: 'ছবি',
      description: 'Documentary photography capturing the raw moments of protest.',
      descriptionBn: 'প্রতিবাদের মুহূর্তগুলি ধারণকারী ডকুমেন্টারি ফটোগ্রাফি।',
      route: '/photos',
      image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png'
    },
    {
      title: 'INTERVIEWS',
      titleBn: 'সাক্ষাৎকার',
      description: 'Hear directly from the voices of the movement.',
      descriptionBn: 'আন্দোলনের কণ্ঠস্বর থেকে সরাসরি শুনুন।',
      route: '/interviews',
      image: 'https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg'
    },
    {
      title: 'TIMELINE',
      titleBn: 'টাইমলাইন',
      description: 'Day-by-day account of how events unfolded.',
      descriptionBn: 'ঘটনাগুলি কিভাবে ঘটেছিল তার দিন-প্রতিদিনের বিবরণ।',
      route: '/timeline',
      image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg'
    }
  ];
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
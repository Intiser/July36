import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';

interface TimelineEvent {
  date: string;
  dateBn: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  image?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  translationsService = inject(TranslationsService);
  
  timelineEvents: TimelineEvent[] = [
    {
      date: 'July 15, 2024',
      dateBn: 'জুলাই ১৫, ২০২৪',
      title: 'Initial Protests Begin',
      titleBn: 'প্রাথমিক বিক্ষোভ শুরু',
      description: 'Students at Dhaka University gathered to protest against the controversial quota system in government jobs.',
      descriptionBn: 'সরকারি চাকরিতে বিতর্কিত কোটা ব্যবস্থার বিরুদ্ধে বিক্ষোভ করতে ঢাকা বিশ্ববিদ্যালয়ের ছাত্ররা জড়ো হয়েছিল।',
      image: 'https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg',
      imageAlt: 'Initial protests at Dhaka University'
    }
  ];
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
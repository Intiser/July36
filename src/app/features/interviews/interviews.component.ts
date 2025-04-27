import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';
import { DataService } from '../../core/services/data/data.service';

interface Interview {
  id: number;
  subject: string;
  subjectBn: string;
  role: string;
  roleBn: string;
  interviewer: string;
  interviewerBn: string;
  date: string;
  dateBn: string;
  excerpt: string;
  excerptBn: string;
  image: string;
}

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  interviews: Interview[] = [];
  
  ngOnInit() {
    this.dataService.getInterviews().subscribe(data => {
      this.interviews = data.items;
    });
  }
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
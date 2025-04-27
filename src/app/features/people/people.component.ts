import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TranslationsService } from '../../core/services/i18n/translations.service';
import { DataService } from '../../core/services/data/data.service';

interface Person {
  id: number;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
}

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  translationsService = inject(TranslationsService);
  dataService = inject(DataService);
  
  people: Person[] = [];
  
  ngOnInit() {
    this.dataService.getPeople().subscribe(data => {
      this.people = data.items;
    });
  }
  
  get currentLanguage() {
    return this.translationsService.getCurrentLanguage();
  }
}
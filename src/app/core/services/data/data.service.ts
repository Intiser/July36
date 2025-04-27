import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getArtworks(): Observable<any> {
    return this.http.get('/assets/data/artworks.json');
  }

  getPhotos(): Observable<any> {
    return this.http.get('/assets/data/photos.json');
  }

  getTimeline(): Observable<any> {
    return this.http.get('/assets/data/timeline.json');
  }

  getWritings(): Observable<any> {
    return this.http.get('/assets/data/writings.json');
  }

  getInterviews(): Observable<any> {
    return this.http.get('/assets/data/interviews.json');
  }

  getPeople(): Observable<any> {
    return this.http.get('/assets/data/people.json');
  }

  getVideos(): Observable<any> {
    return this.http.get('/assets/data/videos.json');
  }
}
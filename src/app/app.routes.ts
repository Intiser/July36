import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    data: { title: 'Strike 2024 Museum - Home' }
  },
  {
    path: 'artworks',
    loadComponent: () => import('./features/artworks/artworks.component').then(m => m.ArtworksComponent),
    data: { title: 'Artworks - Strike 2024 Museum' }
  },
  {
    path: 'photos',
    loadComponent: () => import('./features/photos/photos.component').then(m => m.PhotosComponent),
    data: { title: 'Photos - Strike 2024 Museum' }
  },
  {
    path: 'videos',
    loadComponent: () => import('./features/videos/videos.component').then(m => m.VideosComponent),
    data: { title: 'Videos - Strike 2024 Museum' }
  },
  {
    path: 'writings',
    loadComponent: () => import('./features/writings/writings.component').then(m => m.WritingsComponent),
    data: { title: 'Writings - Strike 2024 Museum' }
  },
  {
    path: 'interviews',
    loadComponent: () => import('./features/interviews/interviews.component').then(m => m.InterviewsComponent),
    data: { title: 'Interviews - Strike 2024 Museum' }
  },
  {
    path: 'timeline',
    loadComponent: () => import('./features/timeline/timeline.component').then(m => m.TimelineComponent),
    data: { title: 'Timeline - Strike 2024 Museum' }
  },
  {
    path: 'people',
    loadComponent: () => import('./features/people/people.component').then(m => m.PeopleComponent),
    data: { title: 'Influential People - Strike 2024 Museum' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
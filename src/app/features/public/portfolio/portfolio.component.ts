import { Component } from '@angular/core';
import { UnsplashService } from '../service/unsplash.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  photos: any[] = [];

  constructor(private unsplashService: UnsplashService) {
    this.getPhotos('conference,speaker', 1, 50, 'relevant');
  }

  getPhotos(query: string, page: number, perPage: number, orderBy: string): void {
    this.unsplashService.getPhotos(query, page, perPage, orderBy).subscribe((photos) => {
      this.photos = photos.map((photo) => ({
        id: photo.id,
        description: photo.description,
        urls: photo.urls,
      }));
    });
  }


}

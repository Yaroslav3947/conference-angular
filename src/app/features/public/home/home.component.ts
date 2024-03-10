import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../service/unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  photos: any[] = [];

  constructor(private unsplashService: UnsplashService) {
    this.getPhotos('conference,speaker', 1, 50, 'relevant');

    console.log(this.photos);
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

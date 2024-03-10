import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {

  private accessKey = 'yLLWWaMBMMZ1n6i82cVqBGyNLGJybR_uMbZNCZhY_XI';
  private apiUrl = 'https://api.unsplash.com/photos/';

  constructor(private http: HttpClient) {}

  getPhotos(query: string, page = 1, perPage = 10, orderBy = 'relevant'): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessKey}`,
    });

    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('per_page', perPage.toString())
      .set('order_by', orderBy);

    return this.http.get<any[]>(this.apiUrl, { params, headers });
  }
}

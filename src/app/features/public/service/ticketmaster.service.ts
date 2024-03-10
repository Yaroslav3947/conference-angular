import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketmasterService {
  private apiKey = '209Z8aLm7BXojPPB3eOVp3XhpoN3IG3n';
  private apiUrl = 'https://app.ticketmaster.com/discovery/v2/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    const params = new HttpParams().set('apikey', this.apiKey);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
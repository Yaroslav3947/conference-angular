import { Component } from '@angular/core';
import { TicketmasterService } from '../service/ticketmaster.service';
import { EventResponse } from '../models/event-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  events$: EventResponse[] = [];

  constructor(private ticketmasterService: TicketmasterService) {
    this.getEvents();
  }


  getEvents(): void {
    this.ticketmasterService.getEvents().subscribe(
      (response) => {
        console.log(response)
        this.events$ = this.mapToEventResponse(response._embedded.events);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  private mapToEventResponse(apiEvents: any[]): EventResponse[] {
    return apiEvents.map((apiEvent) => ({
      name: apiEvent.name,
      date: new Date(apiEvent.dates.start.localDate),
      image:  apiEvent.images[0].url,
      priceRangeMin: apiEvent.priceRanges && apiEvent.priceRanges.length > 0 ? apiEvent.priceRanges[0].min : null,
      priceRangeMax: apiEvent.priceRanges && apiEvent.priceRanges.length > 0 ? apiEvent.priceRanges[0].max : null,
      url: apiEvent.url,
      description: apiEvent.pleaseNote,
    }));
  }
}

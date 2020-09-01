import { Injectable } from '@angular/core';
import { Event } from '../data models/event';

@Injectable({providedIn: 'root'})
export class EventsService {

  // tslint:disable: max-line-length
  private eventsList: Event[] = [
                          {day: '20', month: 'MAR', year: 2020, venue: 'Goodluck Bar', city: 'Johannesburg', country: 'South Africa', locationLink: 'https://g.page/foxjunction?share', ticketLink: 'https://bit.ly/RSVP_CB', status: 'sold-out'},
                          {day: '27', month: 'MAR', year: 2020, venue: 'The Warehouse', city: 'Durban', country: 'South Africa', locationLink: 'https://goo.gl/maps/dniiPSNkXq8U4PoB9', ticketLink: 'https://bit.ly/RSVP_CB', status: 'sold-out'},
                          {day: '03', month: 'APR', year: 2020, venue: 'Colourbox Studios', city: 'Cape Town', country: 'South Africa', locationLink: 'https://goo.gl/maps/CVcBDPow8hfFs3Uq7', ticketLink: 'https://bit.ly/RSVP_CB', status: 'sold-out'},
                         ];

  constructor() { }

  getEvents(): Event[] {
    return this.eventsList;
  }

}

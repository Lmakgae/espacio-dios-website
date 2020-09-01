import { Component, OnInit } from '@angular/core';
import { TitleMetaService } from '../core/services/tile-meta.service';
import { EventsService } from '../shared/data/services/events.service';
import { Event } from '../shared/data/data models/event';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  constructor(
    private eventsService: EventsService,
    private titleMetaService: TitleMetaService,
  ) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { LyricsService } from './lyrics.service';
import { LyricsOptions } from './lyricsOptions';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input() lyricsOptions: LyricsOptions;

  constructor(
    private lyricsService: LyricsService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.lyricsService.removeLyrics();
  }

}

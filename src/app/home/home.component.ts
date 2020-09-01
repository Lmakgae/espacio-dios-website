import { Component, OnInit } from '@angular/core';
import { TitleMetaService } from '../core/services/tile-meta.service';
import { Subscription, Observable } from 'rxjs';
import { Music } from '../shared/data/data models/music';
import { MusicDataService } from '../shared/data/services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicSub: Subscription;
  music: Observable<Music[]>;
  musicList: Music[];

  constructor(
    private musicDataService: MusicDataService,
    private titleMetaService: TitleMetaService,
  ) { }

  ngOnInit() {

    // tslint:disable: max-line-length
    this.music = this.musicDataService.getListData();
    this.musicSub = this.music.subscribe(next => {
      this.musicList = next;
    });

    this.titleMetaService.setMeta(
      'Espacio Dios - Official Site',
      'The Official Website of Espacio Dios. Espacio Dios is a 21 year old South African songwriter, producer & artist.',
      'https://espaciodios.com/assets/espacio-backround-min.jpg',
      'https://espaciodios.com',
      'summary_large_image',
      'Espacio Dios, Espacio, Espacio dios website, Espacio dios music, Espacio dios songs, Espacio dios albums, Espacio dios official website');

  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Music } from '../shared/data/data models/music';
import { MusicDataService } from '../shared/data/services/music.service';
import { TitleMetaService } from '../core/services/tile-meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  type: string;
  musicSub: Subscription;
  music: Observable<Music[]>;
  musicList: Music[];

  constructor(
    private musicData: MusicDataService,
    private router: Router,
    private titleMetaService: TitleMetaService,
  ) { }

  ngOnInit() {
    this.music = this.musicData.getListData();
    this.musicSub = this.music.subscribe(next => {
      this.musicList = next;
    });

    this.type = this.musicList[0].type;

    this.setMeta();
  }

  setMeta() {
    // tslint:disable: max-line-length
    if (this.type === 'single') {
      if (this.musicList[0].single.feat.length > 0) {
        this.titleMetaService.setMeta(
          this.musicList[0].single.artist + ' - ' + this.musicList[0].single.trackName + ' (feat. ' + this.musicList[0].single.feat + ') | Espacio Dios Official Website' ,
          'Check out the latest music from Espacio Dios with a single ' + this.musicList[0].single.trackName + ' (feat. ' + this.musicList[0].single.feat + ') released on the ' + this.musicList[0].single.date + '.',
          'https://espaciodios.com' + this.musicList[0].single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.musicList[0].single.trackName + ', ' + this.musicList[0].single.feat + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.musicList[0].single.trackName + ' song');

      } else {
        this.titleMetaService.setMeta(
          this.musicList[0].single.artist + ' - ' + this.musicList[0].single.trackName + ' | Espacio Dios Official Website' ,
          'Check out the latest music from Espacio Dios with a single ' + this.musicList[0].single.trackName + ' released on the ' + this.musicList[0].single.date + '.',
          'https://espaciodios.com' + this.musicList[0].single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.musicList[0].single.trackName + ', ' + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.musicList[0].single.trackName + ' song');

      }

    } else if (this.type === 'album') {
      this.titleMetaService.setMeta(
        'Espacio Dios - ' + this.musicList[0].album.albumName + ' | Espacio Dios Official Website' ,
        'Check out the latest music from Espacio Dios with an album ' + this.musicList[0].album.albumName + ' released on the ' + this.musicList[0].album.date + '.',
        'https://espaciodios.com' + this.musicList[0].album.artwork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.musicList[0].album.albumName + ', ' + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.musicList[0].album.albumName + ' song');

    } else if (this.type === 'feature') {
      this.titleMetaService.setMeta(
        this.musicList[0].feature.artist + ' - ' + this.musicList[0].feature.trackName + ' (feat. ' + this.musicList[0].feature.feat + ') | Espacio Dios Official Website' ,
        'Check out the latest music from Espacio Dios with a single he got featured ' + this.musicList[0].feature.artist + ' - ' + this.musicList[0].feature.trackName + ' (feat. ' + this.musicList[0].feature.feat + ') released on the ' + this.musicList[0].feature.date + '.',
        'https://espaciodios.com' + this.musicList[0].feature.artWork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.musicList[0].feature.trackName + ', ' + this.musicList[0].feature.feat + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.musicList[0].feature.trackName + ' song');
    }

  }

}

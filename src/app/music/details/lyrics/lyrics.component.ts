import { Component, OnInit } from '@angular/core';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';
import { Music } from 'src/app/shared/data/data models/music';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicDataService } from 'src/app/shared/data/services/music.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  music: Music;
  id: string;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private musicDataService: MusicDataService,
    private titleMetaService: TitleMetaService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.queryParamMap.get('i');
    this.type = this.route.snapshot.queryParamMap.get('t');

    this.music = this.musicDataService.getData(this.id, this.type);

    this.setMeta();

  }

  setMeta() {
    // tslint:disable: max-line-length
    if (this.type === 'single') {

      let lyrics = '';

      if (this.music.single.lyrics[0] === 'INSTRUMENTAL') {
        lyrics = 'INSTRUMENTAL';
      } else {
        lyrics = this.music.single.lyrics[0];
        for (let index = 1; index < 8; index++) {
          lyrics = lyrics + ', ' + this.music.single.lyrics[index];
        }
      }

      if (this.music.single.feat.length > 0) {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' (feat. ' + this.music.single.feat + ') lyrics | Espacio Dios Official Website' ,
          this.music.single.artist + ' - ' + this.id + ' (feat. ' + this.music.single.feat + ') lyrcis: ' + lyrics.toLowerCase(),
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', ' + this.music.single.feat + ', Espacio dios singles, Espacio dios music, espacio dios lyrics, espacio dios ' + this.music.single.trackName + ' lyrics');

      } else {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' lyrics | Espacio Dios Official Website' ,
          this.music.single.artist + ' - ' + this.id + ' lyrcis: ' + lyrics.toLowerCase(),
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', Espacio dios singles, Espacio dios music, espacio dios lyrics, espacio dios ' + this.music.single.trackName + ' lyrics');

      }

    } else if (this.type === 'album') {
      this.titleMetaService.setMeta(
        'Espacio Dios ' + ' - ' + this.music.album.albumName + ' lyrics | Espacio Dios Official Website' ,
        'Espacio Dios ' + ' - ' + this.id + ' lyrcis.',
        'https://espaciodios.com' + this.music.album.artwork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.album.albumName + ', Espacio dios singles, Espacio dios music, espacio dios lyrics, espacio dios ' + this.music.album.albumName + ' lyrics');

    } else if (this.type === 'feature') {

      let lyrics = '';

      if (this.music.feature.lyrics[0] === 'INSTRUMENTAL') {
        lyrics = 'INSTRUMENTAL';
      } else {
        lyrics = this.music.feature.lyrics[0];
        for (let index = 1; index < 8; index++) {
          lyrics = lyrics + ', ' + this.music.feature.lyrics[index];
        }
      }

      this.titleMetaService.setMeta(
        this.music.feature.artist + ' - ' + this.music.feature.trackName + ' (feat. ' + this.music.feature.feat + ') lyrics | Espacio Dios Official Website' ,
        this.music.feature.artist + ' - ' + this.id + ' (feat. ' + this.music.feature.feat + ') lyrcis: ' + lyrics.toLowerCase(),
        'https://espaciodios.com' + this.music.feature.artWork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.feature.trackName + ', ' + this.music.feature.feat + ', Espacio dios singles, Espacio dios music, espacio dios lyrics, espacio dios ' + this.music.feature.trackName + ' lyrics');
    }

  }

}

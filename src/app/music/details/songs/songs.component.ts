import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from 'src/app/shared/data/data models/music';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { LyricsService } from 'src/app/shared/lyrics/lyrics.service';
import { LyricsOptions } from 'src/app/shared/lyrics/lyricsOptions';
import { LyricsComponent } from 'src/app/shared/lyrics/lyrics.component';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit, OnDestroy {

  type: string;
  id: string;
  index = 0;
  audioStatus = '';
  audioIndex = -1;
  audio: HTMLAudioElement;
  music: Music;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformID: any,
    private musicDataService: MusicDataService,
    private lyricsService: LyricsService,
    private titleMetaService: TitleMetaService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('i');
    this.type = this.route.snapshot.queryParamMap.get('t');

    this.music = this.musicDataService.getData(this.id, this.type);

    this.setMeta();

    if (isPlatformBrowser(this.platformID)) {
      this.audio = new Audio();

      this.audio.onended = () => {
        this.audioStatus = '';
      };
    }

  }

  setMeta() {
    // tslint:disable: max-line-length
    if (this.type === 'single') {
      if (this.music.single.feat.length > 0) {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' (feat. ' + this.music.single.feat + ') song | Espacio Dios Official Website' ,
          'Espacio Dios single ' + this.id + ' (feat. ' + this.music.single.feat + ') released on the ' + this.music.single.date + '.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', ' + this.music.single.feat + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.music.single.trackName + ' song');

      } else {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' song | Espacio Dios Official Website' ,
          'Espacio Dios single ' + this.id + ' released on the ' + this.music.single.date + '.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.music.single.trackName + ' song');

      }

    } else if (this.type === 'album') {
      this.titleMetaService.setMeta(
        'Espacio Dios' + ' - ' + this.music.album.albumName + ' album | Espacio Dios Official Website' ,
        'Espacio Dios songs for the album ' + this.id + ' released on the ' + this.music.album.date + '.',
        'https://espaciodios.com' + this.music.album.artwork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.album.albumName + ', Espacio dios album, Espacio dios music, espacio dios song, espacio dios ' + this.music.album.albumName + ' album');

    } else if (this.type === 'feature') {
      this.titleMetaService.setMeta(
        this.music.feature.artist + ' - ' + this.music.feature.trackName + ' (feat. ' + this.music.feature.feat + ') song | Espacio Dios Official Website' ,
        'Espacio Dios featured on the single ' + this.music.feature.artist + ' - ' + this.id + ' (feat. ' + this.music.feature.feat + ') released on the ' + this.music.feature.date + '.',
        'https://espaciodios.com' + this.music.feature.artWork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.feature.trackName + ', ' + this.music.feature.feat + ', Espacio dios singles, Espacio dios music, espacio dios song, espacio dios ' + this.music.feature.trackName + ' song');
    }

  }

  ngOnDestroy() {

    if (isPlatformBrowser(this.platformID)) {
      this.audio.pause();
      this.audio = null;
    }

  }

  playAudio(index: number, url: string) {

    if (isPlatformBrowser(this.platformID)) {

      if (index === this.audioIndex) {
        if (this.audioStatus === 'playing') {
          this.audioStatus = 'paused';
          this.audio.pause();
        } else if ( this.audioStatus === 'paused') {
          this.audio.play().then(() => this.audioStatus = 'playing');
        }
      } else {
        if (this.audioStatus === 'playing') {
          this.audio.pause();
        }
        this.audio.src = url;
        this.audioIndex = index;
        this.audio.play().then(() => this.audioStatus = 'playing');
      }

    }

  }

  checkPlay(index: number): boolean {

    if (isPlatformBrowser(this.platformID)) {
      if (this.audioIndex === -1 && (this.audioStatus === 'paused' || this.audioStatus === '')) {
        return true;
      } else if (this.audioIndex === index) {
        if (this.audioStatus === 'paused' || this.audioStatus === '') {
          return true;
        } else if (this.audioStatus === 'playing') {
          return false;
        }
      } else if (this.audioIndex !== index) {
        return true;
      }
    }

    return false;
  }

  checkPause(index: number): boolean {

    if (isPlatformBrowser(this.platformID)) {
      if (this.audioIndex === -1 && (this.audioStatus === 'playing')) {
        return true;
      } else if (this.audioIndex === index) {
        if (this.audioStatus === 'paused' || this.audioStatus === '') {
          return false;
        } else if (this.audioStatus === 'playing') {
          return true;
        }
      } else if (this.audioIndex !== index) {
        return false;
      }
    }

    return false;
  }

  viewLyrics(index: number, type: string) {
    if (type === 'single') {
      const lyricsOptions = new LyricsOptions(this.music.single.trackName, this.music.single.feat, this.music.single.lyrics);
      this.lyricsService.viewLyrics(LyricsComponent, lyricsOptions);
    } else if (type === 'feature') {
      const lyricsOptions = new LyricsOptions(this.music.feature.trackName, this.music.feature.feat, this.music.feature.lyrics);
      this.lyricsService.viewLyrics(LyricsComponent, lyricsOptions);
    } else if ( type === 'album') {
      // tslint:disable-next-line: max-line-length
      const lyricsOptions = new LyricsOptions(this.music.album.tracks[index].trackName, this.music.album.tracks[index].feat, this.music.album.tracks[index].lyrics);
      this.lyricsService.viewLyrics(LyricsComponent, lyricsOptions);
    }
  }

}

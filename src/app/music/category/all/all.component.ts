import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { Observable, Subscription } from 'rxjs';
import { Music } from 'src/app/shared/data/data models/music';
import { Router } from '@angular/router';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {

  type: string;
  musicSub: Subscription;
  music: Observable<Music[]>;
  musicList: Music[];

  constructor(
    private musicData: MusicDataService,
    private router: Router,
    private titleMetaService: TitleMetaService,
  ) { }

  ngOnInit(): void {
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

  ngOnDestroy() {
    this.musicSub.unsubscribe();
  }

  viewSongs(id: string, type: string) {
    console.log('Trying');

    switch (type) {
      case 'single':
        this.router.navigate(['music/single/songs'], {queryParams: {i: id, t: type }});
        break;
      case 'album':
        this.router.navigate(['music/album/songs'], {queryParams: {i: id, t: type }});
        break;
      case 'feature':
        this.router.navigate(['music/featured/songs'], {queryParams: {i: id, t: type }});
        break;
      default:
        break;
    }
  }

  viewVideos(id: string, type: string) {
    switch (type) {
      case 'single':
        this.router.navigate(['music/single/videos'], {queryParams: {i: id, t: type }});
        break;
      case 'album':
        this.router.navigate(['music/album/videos'], {queryParams: {i: id, t: type }});
        break;
      case 'feature':
        this.router.navigate(['music/featured/videos'], {queryParams: {i: id, t: type }});
        break;
      default:
        break;
    }
  }

  viewLyrics(id: string, type: string) {
    switch (type) {
      case 'single':
        this.router.navigate(['music/single/lyrics'], {queryParams: {i: id, t: type }});
        break;
      case 'album':
        this.router.navigate(['music/album/lyrics'], {queryParams: {i: id, t: type }});
        break;
      case 'feature':
        this.router.navigate(['music/featured/lyrics'], {queryParams: {i: id, t: type }});
        break;
      default:
        break;
    }
  }

}

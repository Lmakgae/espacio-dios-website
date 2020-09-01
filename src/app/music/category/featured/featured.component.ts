import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Music } from 'src/app/shared/data/data models/music';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { Router } from '@angular/router';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy  {

  musicSub: Subscription;
  music: Observable<Music[]>;
  musicList: Music[];

  constructor(
    private musicData: MusicDataService,
    private router: Router,
    private titleMetaService: TitleMetaService
  ) { }

  ngOnInit(): void {
    this.music = this.musicData.getListData();
    this.musicSub = this.music.subscribe(next => {
      this.musicList = next;
    });

    this.titleMetaService.setMeta(
      'Espacio Dios: Music: Featured',
      'Check out all Espacio Dios singles that he got featured on',
      'https://espaciodios.com/assets/espacio-backround-min.jpg',
      'https://espaciodios.com/music/category/featured',
      'summary',
      'Espacio Dios, Espacio, Espacio dios website, Espacio dios features, Espacio dios music');

  }

  ngOnDestroy() {
    this.musicSub.unsubscribe();
  }

  viewSongs(id: string, type: string) {
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

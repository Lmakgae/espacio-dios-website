import { Component, OnInit } from '@angular/core';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from 'src/app/shared/data/data models/music';
import { YoutubeService } from 'src/app/shared/youtube/youtube.service';
import { YoutubeComponent } from 'src/app/shared/youtube/youtube.component';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  music: Music;
  id: string;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private musicDataService: MusicDataService,
    private youtubeService: YoutubeService,
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
      if (this.music.single.feat.length > 0) {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' (feat. ' + this.music.single.feat + ') video | Espacio Dios Official Website' ,
          'Espacio Dios single ' + this.id + ' (feat. ' + this.music.single.feat + ') video.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', ' + this.music.single.feat + ', Espacio dios singles, Espacio dios music, espacio dios video, espacio dios ' + this.music.single.trackName + ' video');

      } else {
        this.titleMetaService.setMeta(
          this.music.single.artist + ' - ' + this.music.single.trackName + ' video | Espacio Dios Official Website' ,
          'Espacio Dios single ' + this.id + ' video.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', Espacio dios singles, Espacio dios music, espacio dios video, espacio dios ' + this.music.single.trackName + ' video');

      }

    } else if (this.type === 'album') {
      this.titleMetaService.setMeta(
        'Espacio Dios' + ' - ' + this.music.album.albumName + ' videos | Espacio Dios Official Website' ,
        'Espacio Dios videos for the album ' + this.id + '.',
        'https://espaciodios.com' + this.music.album.artwork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.album.albumName + ', Espacio dios album, Espacio dios music, espacio dios videos, espacio dios ' + this.music.album.albumName + ' videos');

    } else if (this.type === 'feature') {
      this.titleMetaService.setMeta(
        this.music.feature.artist + ' - ' + this.music.feature.trackName + ' (feat. ' + this.music.feature.feat + ') video | Espacio Dios Official Website' ,
        'Espacio Dios featured on the single ' + this.music.feature.artist + ' - ' + this.id + ' (feat. ' + this.music.feature.feat + ') video.',
        'https://espaciodios.com' + this.music.feature.artWork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.feature.trackName + ', ' + this.music.feature.feat + ', Espacio dios singles, Espacio dios music, espacio dios video, espacio dios ' + this.music.feature.trackName + ' video');
    }

  }

  viewVideo(videoId: string) {
    this.youtubeService.viewVideo(YoutubeComponent, videoId);
  }

}

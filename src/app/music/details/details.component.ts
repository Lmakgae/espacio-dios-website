import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { Music } from 'src/app/shared/data/data models/music';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  type: string;
  music: Music;

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

}

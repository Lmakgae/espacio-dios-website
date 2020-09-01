import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/shared/data/data models/music';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { TitleMetaService } from 'src/app/core/services/tile-meta.service';

@Component({
  selector: 'app-buy-stream',
  templateUrl: './buy-stream.component.html',
  styleUrls: ['./buy-stream.component.css']
})
export class BuyStreamComponent implements OnInit {

  type: string;
  id: string;
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
          'Buy or Stream ' + this.music.single.artist + ' - ' + this.music.single.trackName + ' (feat. ' + this.music.single.feat + ') single | Espacio Dios Official Website' ,
          'Espacio Dios: ' + this.id + ' (feat. ' + this.music.single.feat + '): Single: Buy/Stream Single',
          'Buy/Stream the single ' + this.id + ' (feat. ' + this.music.single.feat + ') released on the ' + this.music.single.date + ' on iTunes, Spotify, Amazon Music, Google Play, Apple Music, Tidal and Deezer.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', ' + this.music.single.feat + ', Espacio dios singles, Espacio dios music, Buy espacio dios, stream espacio dios');

      } else {
        this.titleMetaService.setMeta(
          'Buy or Stream ' + this.music.single.artist + ' - ' + this.music.single.trackName + ' single | Espacio Dios Official Website' ,
          'Buy/Stream the single ' + this.id + ' released on the ' + this.music.single.date + ' on iTunes, Spotify, Amazon Music, Google Play, Apple Music, Tidal and Deezer.',
          'https://espaciodios.com' + this.music.single.artWork,
          'https://espaciodios.com' + this.router.url,
          'summary_large_image',
          'Espacio Dios, Espacio, Espacio dios website, ' + this.music.single.trackName + ', Espacio dios singles, Espacio dios music, Buy espacio dios, stream espacio dios');

      }

    } else if (this.type === 'album') {
      this.titleMetaService.setMeta(
        'Buy or Stream ' + 'Espacio Dios ' + ' - ' + this.music.album.albumName + ' album | Espacio Dios Official Website' ,
        'Buy/Stream the album ' + this.id + ' released on the ' + this.music.album.date + ' on iTunes, Spotify, Amazon Music, Google Play, Apple Music, Tidal and Deezer.',
        'https://espaciodios.com' + this.music.album.artwork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.album.albumName  + ', Espacio dios album, Espacio dios music, Buy espacio dios, stream espacio dios');

    } else if (this.type === 'feature') {
      this.titleMetaService.setMeta(
        'Buy or Stream ' + this.music.single.artist + ' - ' + this.music.single.trackName + ' (feat. ' + this.music.single.feat + ') | Espacio Dios Official Website' ,
        'Buy/Stream the single ' + this.music.feature.artist + ' - ' + this.id + ' (feat. ' + this.music.feature.feat + ') released on the ' + this.music.feature.date + ' on iTunes, Spotify, Amazon Music, Google Play, Apple Music, Tidal and Deezer.',
        'https://espaciodios.com' + this.music.feature.artWork,
        'https://espaciodios.com' + this.router.url,
        'summary_large_image',
        'Espacio Dios, Espacio, Espacio dios website, ' + this.music.feature.trackName + ', ' + this.music.feature.feat + ', Espacio dios singles, Espacio dios music, Buy espacio dios, stream espacio dios');
    }

  }

}

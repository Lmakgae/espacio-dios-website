import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SongsComponent } from './songs/songs.component';
import { VideosComponent } from './videos/videos.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { BuyStreamComponent } from './buy-stream/buy-stream.component';


@NgModule({
  declarations: [DetailsComponent, SongsComponent, VideosComponent, LyricsComponent, BuyStreamComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }

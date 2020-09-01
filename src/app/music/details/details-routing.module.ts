import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { VideosComponent } from './videos/videos.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { BuyStreamComponent } from './buy-stream/buy-stream.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
   },
  { path: 'songs',
    component: SongsComponent,
   },
  { path: 'videos',
    component: VideosComponent
   },
  { path: 'lyrics',
    component: LyricsComponent
   },
  { path: 'buystream',
    component: BuyStreamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }

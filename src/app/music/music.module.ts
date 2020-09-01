import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { CategoryModule } from './category/category.module';
import { DetailsModule } from './details/details.module';



@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    CategoryModule,
    DetailsModule
  ]
})
export class MusicModule { }

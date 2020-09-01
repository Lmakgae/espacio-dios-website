import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AllComponent } from './all/all.component';
import { AlbumsComponent } from './albums/albums.component';
import { SinglesComponent } from './singles/singles.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [CategoryComponent, AllComponent, AlbumsComponent, SinglesComponent, FeaturedComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

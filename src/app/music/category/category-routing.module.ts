import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SinglesComponent } from './singles/singles.component';
import { FeaturedComponent } from './featured/featured.component';
import { AllComponent } from './all/all.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'all',
    pathMatch: 'full'
   },
  { path: 'all',
    component: AllComponent
   },
  { path: 'albums',
    component: AlbumsComponent
   },
  { path: 'singles',
    component: SinglesComponent
   },
  { path: 'featured',
    component: FeaturedComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'category',
    pathMatch: 'full'
   },
  { path: 'category',
    component: CategoryComponent,
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
   },
  { path: 'single',
    component: DetailsComponent,
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
   },
  { path: 'album',
    component: DetailsComponent,
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
   },
  { path: 'featured',
    component: DetailsComponent,
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }

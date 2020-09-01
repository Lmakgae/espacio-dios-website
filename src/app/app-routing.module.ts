import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BioComponent } from './bio/bio.component';
import { TermsComponent } from './terms/terms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    },
  {
    path: 'music',
    component: MusicComponent,
    loadChildren: './music/music.module#MusicModule',
   },
  {
    path: 'events',
    component: EventsComponent,
   },
  // {
  //   path: 'bio',
  //   component: BioComponent,
  //   },
  // {
  //   path: 'terms',
  //   component: TermsComponent,
  //   },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  // {
  //   path: 'feedback',
  //   component: FeedbackComponent,
  //   },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  //  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

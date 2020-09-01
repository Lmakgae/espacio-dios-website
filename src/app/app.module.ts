import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MusicModule } from './music/music.module';
import { EventsComponent } from './events/events.component';
import { BioComponent } from './bio/bio.component';
import { TermsComponent } from './terms/terms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LyricsComponent } from './shared/lyrics/lyrics.component';
import { YoutubeComponent } from './shared/youtube/youtube.component';
import { SignUpFormComponent } from './shared/sign-up-form/sign-up-form.component';
import { SocialMediaLinksComponent } from './shared/social-media-links/social-media-links.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent, EventsComponent, SignupComponent, HomeComponent, LyricsComponent,
    YoutubeComponent, PageNotFoundComponent, SignUpFormComponent, SocialMediaLinksComponent, TermsComponent,
    FeedbackComponent, BioComponent, PrivacyComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    MusicModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LyricsComponent, YoutubeComponent]
})
export class AppModule { }

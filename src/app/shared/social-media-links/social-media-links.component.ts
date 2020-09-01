import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent implements OnInit {

  @Input() color: string;
  facebook;
  twitter;
  instagram;
  apple;
  spotify;
  youtube;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // tslint:disable: max-line-length
    this.facebook = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/facebook-' + this.color + '.svg)');
    this.twitter = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/twitter-' + this.color + '.svg)');
    this.instagram = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/instagram-' + this.color + '.svg)');
    this.apple = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/apple-' + this.color + '.svg)');
    this.spotify = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/spotify-' + this.color + '.svg)');
    this.youtube = this.sanitizer.bypassSecurityTrustStyle('background-image: url(../../../assets/icons/youtube-' + this.color + '.svg)');
  }

}

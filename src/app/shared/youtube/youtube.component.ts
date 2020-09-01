import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('youtubePlayer_con') youtubePlayerCon: ElementRef<HTMLDivElement>;
  @ViewChild('youtubePlayer') youtubePlayer: ElementRef<HTMLElement>;
  @Input() videoId = '';
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private youtubeService: YoutubeService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    // TODO: Check when it's mobile to give the youtube player a margin-top of 50px when in protrate mode to allow the cancel button to work
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.youtubePlayerCon.nativeElement.clientWidth, 1320);
    this.videoHeight = this.videoWidth * 0.52;
    this.changeDetectorRef.detectChanges();
  }

  close() {
    this.youtubeService.closeVideo();
  }

}

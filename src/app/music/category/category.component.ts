import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { MusicDataService } from 'src/app/shared/data/services/music.service';
import { Subscription, Observable } from 'rxjs';
import { Music } from 'src/app/shared/data/data models/music';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  musicSub: Subscription;
  music: Observable<Music[]>;
  musicList: Music[];

  constructor(
    private musicDataService: MusicDataService,
    @Inject(PLATFORM_ID) private platformID: any,
  ) {
  }

  ngOnInit(): void {
    this.music = this.musicDataService.getListData();
    this.musicSub = this.music.subscribe(next => {
      this.musicList = next;
    });


  }

  ngOnDestroy() {
    this.musicSub.unsubscribe();
  }

  isPlatformBrowser(): boolean {
    if (isPlatformBrowser(this.platformID)) {
      // console.log('Platform is browser');
      return true;
    }
    // console.log('Platfom is server');
    return false;
  }


}

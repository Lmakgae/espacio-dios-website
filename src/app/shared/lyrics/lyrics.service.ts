import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { LyricsOptions } from './lyricsOptions';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  componentRef: any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector
              ) { }

  viewLyrics(LyricsComponent, lyricsOptions: LyricsOptions) {
    this.removeLyrics();

    const factory = this.componentFactoryResolver.resolveComponentFactory(LyricsComponent);
    this.componentRef = factory.create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);

    this.componentRef.instance.lyricsOptions = lyricsOptions;

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

  }

  removeLyrics() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}

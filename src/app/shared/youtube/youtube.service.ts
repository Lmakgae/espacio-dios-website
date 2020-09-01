import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  componentRef: any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector
              ) { }

  viewVideo(YoutubeComponent, videoId: string) {
    this.closeVideo();

    const factory = this.componentFactoryResolver.resolveComponentFactory(YoutubeComponent);
    this.componentRef = factory.create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);

    this.componentRef.instance.videoId = videoId;

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

  }

  closeVideo() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}

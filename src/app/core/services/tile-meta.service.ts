import { Injectable, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleMetaService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    this.init();
  }

  init() {

    this.metaService.addTags([
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Espacio Dios' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Espacio Dios' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' },
      { name: 'copyright', content: '2020' },
      { name: 'URL', content: 'https://espaciodios.com' },
      // tslint:disable-next-line: max-line-length
      { name: 'keywords', content: 'Espacio Dios, Espacio, Espacio dios website, Espacio dios music, Espacio dios songs, Espacio dios albums, Espacio dios official website' },
      { property: 'og:site_name', content: 'Espacio Dios' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@espacio_dios' },
      { name: 'twitter:creator', content: '@espacio_dios' },
    ]);
  }

  setMeta(title?: string, des?: string, img?: string, url?: string, twitterC?: string, keywords?: string, type?: string) {

    this.removeMeta();

    if (title) {
      this.titleService.setTitle(title);
      this.metaService.addTags([
        { name: 'twitter:title', content: title },
        { property: 'og:title', content: title },
      ], false);
    }

    if (des) {
      this.metaService.addTags([
        { name: 'twitter:description', content: des },
        { property: 'og:description', content: des },
        { name: 'description', content: des },
      ], false);
    }

    if (img) {
      this.metaService.addTags([
        { name: 'twitter:image', content: img },
        { property: 'og:image', content: img },
      ], false);
    }

    if (url) {
      this.metaService.addTags([
        { property: 'og:url', content: url },
        { name: 'twitter:url', content: url },
      ], false);
    }

    if (twitterC) {
      this.metaService.addTags([
        { name: 'twitter:card', content: twitterC }
      ], false);
    }

    if (keywords) {
      this.metaService.addTags([
        { name: 'keywords', content: keywords },
      ], false);
    }

    if (type) {
      this.metaService.addTags([
        { property: 'og:type', content: type },
        { name: 'twitter:type', content: type },
      ], false);
    }

  }

  removeMeta() {

    // tslint:disable: quotemark
    this.metaService.removeTag("name='twitter:title'");
    this.metaService.removeTag("property='og:title'");

    this.metaService.removeTag("name='twitter:description'");
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("property='og:description'");

    this.metaService.removeTag("name='twitter:image'");
    this.metaService.removeTag("property='og:image'");

    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("name='twitter:url'");

    this.metaService.removeTag("name='twitter:card'");

    this.metaService.removeTag("name='keywords'");

    this.metaService.removeTag("property='og:type'");
    this.metaService.removeTag("name='twitter:type'");

  }


}

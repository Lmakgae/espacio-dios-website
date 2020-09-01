import { Component, OnInit } from '@angular/core';
import { TitleMetaService } from '../core/services/tile-meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private titleMetaService: TitleMetaService,
  ) { }

  ngOnInit(): void {

    this.titleMetaService.setMeta(
      'Page Not Found | Espacio Dios Official Website',
      'Espacio Dios: Page Not Found',
      'https://espaciodios.com/assets/espacio-backround-dark.jpg',
      'https://espaciodios.com' + this.router.url,
      'summary');

  }

}

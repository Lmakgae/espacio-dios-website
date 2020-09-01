import { Component, OnInit } from '@angular/core';
import { TitleMetaService } from '../core/services/tile-meta.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(
    private titleMetaService: TitleMetaService) { }

  ngOnInit(): void {
    // tslint:disable: max-line-length
    // tslint:disable quotemark
    this.titleMetaService.setMeta(
      'Privacy Policy | Espacio Dios Official Website',
      "Privacy Policy. Last Updated: This Privacy Policy was last revised and is effective as March 17, 2020. The following privacy policy applies to all users of www.espaciodios.com and it's associated websites, features, content, materials, apps, products and/or services",
      'https://espaciodios.com/assets/espacio-backround-min.jpg',
      'https://espaciodios.com/privacy',
      'summary_large_image',
      'Espacio Dios, Espacio, Espacio dios website, Espacio dios music, Espacio dios songs, Espacio dios albums, Espacio dios official website');
  }

}

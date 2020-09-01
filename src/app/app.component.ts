import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ChildActivationEnd } from '@angular/router';
import { TitleMetaService } from './core/services/tile-meta.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'website',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('hamburger') private hamburgerEl: ElementRef;
  @ViewChild('menu') private menuEl: ElementRef;
  private menuToggle = false;
  @ViewChild('headerCon') private headerConEl: ElementRef;
  @ViewChild('headerLink1') private headerLink1El: ElementRef;
  @ViewChild('headerLink2') private headerLink2El: ElementRef;
  @ViewChild('headerLink3') private headerLink3El: ElementRef;
  @ViewChild('headerLink4') private headerLink4El: ElementRef;
  @ViewChild('headerLink5') private headerLink5El: ElementRef;
  @ViewChild('menuItem1') private menuItem1El: ElementRef;
  @ViewChild('menuItem2') private menuItem2El: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private titleMetaService: TitleMetaService,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe( ev => {

      if (ev instanceof ChildActivationEnd) {
        const r: ChildActivationEnd = ev;

        if (r.snapshot.children[0].routeConfig.path === '**' || r.snapshot.children[0].routeConfig.path === '') {
          this.renderer.setStyle(this.headerConEl.nativeElement, 'background-color', 'transparent');
          this.modifyMenuItemStyle(1);
          if (r.snapshot.children[0].routeConfig.path === '**') {
            this.modifyHeaderLinkStyle(1);

          } else {
            this.modifyHeaderLinkStyle(0);
          }
        } else {
          this.renderer.setStyle(this.headerConEl.nativeElement, 'background-color', 'white');
          this.modifyHeaderLinkStyle(0);
          this.modifyMenuItemStyle(0);
        }
      }

    });

    this.titleMetaService.setMeta(
      'Espacio Dios - Official Site',
      'The Official Website of Espacio Dios. Espacio Dios is a 21 year old South African songwriter, producer & artist.',
      'https://espaciodios.com/assets/espacio-backround-min.jpg',
      'https://espaciodios.com',
      'summary_large_image');

  }

  ngOnDestroy(): void {
  }

  toggleMenu() {
    if (this.menuToggle) {
      this.menuToggle = !this.menuToggle;
      this.renderer.removeClass(this.hamburgerEl.nativeElement, 'is-active');
      this.renderer.removeClass(this.menuEl.nativeElement, 'menu-is-active');
    } else {
      this.menuToggle = !this.menuToggle;
      this.renderer.addClass(this.hamburgerEl.nativeElement, 'is-active');
      this.renderer.addClass(this.menuEl.nativeElement, 'menu-is-active');
    }
  }

  navigateToMenu() {
    this.toggleMenu();
  }

  modifyHeaderLinkStyle(addRemove: number) {
    if (addRemove === 1) {
      this.renderer.addClass(this.headerLink1El.nativeElement, 'f-white');
      this.renderer.addClass(this.headerLink2El.nativeElement, 'f-white');
      this.renderer.addClass(this.headerLink3El.nativeElement, 'f-white');
      this.renderer.addClass(this.headerLink4El.nativeElement, 'f-white');
      this.renderer.addClass(this.headerLink5El.nativeElement, 'f-white');
    } else if (addRemove === 0) {
      this.renderer.removeClass(this.headerLink1El.nativeElement, 'f-white');
      this.renderer.removeClass(this.headerLink2El.nativeElement, 'f-white');
      this.renderer.removeClass(this.headerLink3El.nativeElement, 'f-white');
      this.renderer.removeClass(this.headerLink4El.nativeElement, 'f-white');
      this.renderer.removeClass(this.headerLink5El.nativeElement, 'f-white');
    }
  }

  modifyMenuItemStyle(addRemove: number) {
    if (addRemove === 0) {
      this.renderer.addClass(this.menuItem1El.nativeElement, 'invert-bg-w');
      this.renderer.addClass(this.menuItem2El.nativeElement, 'invert-bg-w');
      this.renderer.removeClass(this.menuItem1El.nativeElement, 'invert-bg-g');
      this.renderer.removeClass(this.menuItem2El.nativeElement, 'invert-bg-g');
    } else if (addRemove === 1) {
      this.renderer.addClass(this.menuItem1El.nativeElement, 'invert-bg-g');
      this.renderer.addClass(this.menuItem2El.nativeElement, 'invert-bg-g');
      this.renderer.removeClass(this.menuItem1El.nativeElement, 'invert-bg-w');
      this.renderer.removeClass(this.menuItem2El.nativeElement, 'invert-bg-w');
    }
  }
}

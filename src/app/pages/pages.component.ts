import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  constructor(private cdr: ChangeDetectorRef) { }


  menu = MENU_ITEMS;
}

// import 'style-loader!leaflet/dist/leaflet.css';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';

import { BrowserModuleLoaderService } from '../../../@core/utils/browserModuleLoader.service';
// import * as L from 'leaflet';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body  *ngIf="isBrowser">
        <div *ngIf="isBrowser" leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeafletComponent {
  isBrowser: boolean;
  options = {};

  constructor(private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object,
    private browserModuleLoaderService: BrowserModuleLoaderService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const L = this.browserModuleLoaderService.getL();
      this.options = {
        layers: [
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        ],
        zoom: 5,
        center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
      };
    }
    this.cdr.detach();
  }

}

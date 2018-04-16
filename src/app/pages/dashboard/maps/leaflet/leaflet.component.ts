// import 'style-loader!leaflet/dist/leaflet.css';

// import * as L from 'leaflet';
import { isPlatformBrowser } from '@angular/common';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, PLATFORM_ID, Inject } from '@angular/core';
import { BrowserModuleLoaderService } from '../../../../@core/utils/browserModuleLoader.service';

@Component({
  selector: 'ngx-leaflet-dashboard',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body  *ngIf="isBrowser">
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeafletDashboardComponent {
  isBrowser: boolean;
  options = {};

  constructor(private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object,
    private browserModuleLoaderService: BrowserModuleLoaderService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    console.log("this.isBrowser ", this.isBrowser);
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

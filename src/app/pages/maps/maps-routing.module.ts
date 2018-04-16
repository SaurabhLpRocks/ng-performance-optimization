import { RouterModule, Routes } from '@angular/router';

import { BubbleMapComponent } from './bubble/bubble-map.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MapsComponent } from './maps.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'gmaps',
    component: GmapsComponent,
  },
  {
    path: 'leaflet',
    component: LeafletComponent,
  }, 
  {
    path: 'bubble',
    component: BubbleMapComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  GmapsComponent,
  LeafletComponent,
  BubbleMapComponent,
];

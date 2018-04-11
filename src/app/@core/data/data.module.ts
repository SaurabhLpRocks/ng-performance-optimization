import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ElectricityService } from './electricity.service';
import { FactorialService } from './factorial.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './player.service';
import { SmartTableService } from './smart-table.service';
import { StateService } from './state.service';
import { UserService } from './users.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  FactorialService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}

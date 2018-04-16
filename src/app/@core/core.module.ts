import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NbAuthModule, NbDummyAuthProvider } from '@nebular/auth';

import { AnalyticsService } from './utils/analytics.service';
import { CommonModule } from '@angular/common';
import { DataModule } from './data/data.module';
import { RandomService } from './utils/random.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { BrowserModuleLoaderService } from './utils/browserModuleLoader.service';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbDummyAuthProvider,
        config: {
          delay: 3000,
          login: {
            rememberMe: true,
          },
        },
      },
    },
  }).providers,
  AnalyticsService,
  RandomService,
  BrowserModuleLoaderService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig } from '@ngrx/data';

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'http://localhost:8080/'
// };

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
  //  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
})
export class AppStoreModule {}

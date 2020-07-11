import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppStoreModule } from './store/app-store.module';

import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { NgrxDataToastService } from './store/ngrx-data-toast.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () =>
      // import('app/heroes/heroes.module').then(m => m.HeroesModule)
      import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'villains',
    loadChildren: () =>
      // import('app/villains/villains.module').then(m => m.VillainsModule)
      import('./villains/villains.module').then(m => m.VillainsModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppStoreModule,

    EntityDataModule.forRoot(entityConfig)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(toastService: NgrxDataToastService) {}
}

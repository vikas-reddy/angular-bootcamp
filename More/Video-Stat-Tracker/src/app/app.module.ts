import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducer } from './dashboard/state/app-state';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppService } from './dashboard/state/app.service';
import { AppCommonModule } from './common/common.module';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  // Coming Soon Lazy Loaded "New Video" Route
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 5 }),
    AppCommonModule,
    DashboardModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

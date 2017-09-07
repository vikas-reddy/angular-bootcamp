import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

// BrowserModule includes a kit of "built in" browser-ready features.
// It avoids the need to import specific features: *ngIf, *ngFor

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: './user-dashboard/user-dashboard.module#UserDashboardModule'},
  { path: 'employees', loadChildren: './employee-browser/employee-browser.module#EmployeeBrowserModule'}
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

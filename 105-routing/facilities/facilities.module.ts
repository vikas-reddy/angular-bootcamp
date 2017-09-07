import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FacilitiesSearchComponent } from './facilities-search.component';
import { SharedModule } from '../shared/shared.module';

const facilitiesRoutes: Routes = [
  { path: '', component: FacilitiesSearchComponent }
];

@NgModule({
  declarations: [
    FacilitiesSearchComponent
  ],
  exports: [FacilitiesSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(facilitiesRoutes)
  ]
})
export class FacilitiesModule { }

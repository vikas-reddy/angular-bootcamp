import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';
import { DontComponent } from './dont.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PositionListComponent } from './position-list/position-list.component';

const dontRoutes: Routes = [
  { path: '', component: DontComponent }
];

@NgModule({
  declarations: [
    DontComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dontRoutes),
    SharedModule
  ]
})
export class DontModule { }

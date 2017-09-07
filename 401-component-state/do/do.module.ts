import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DoComponent } from './do.component';
import { PositionListComponent } from './position-list/position-list.component';

const doRoutes: Routes = [
  { path: '', component: DoComponent }
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    DoComponent,
    PositionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doRoutes),
    SharedModule
  ]
})
export class DoModule { }

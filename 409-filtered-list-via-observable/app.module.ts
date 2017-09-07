import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail-view/employee-detail-view.component';
import { EmployeeListTableViewComponent } from './employee-list-table-view/employee-list-table-view.component';
import { EmployeeLoaderService } from './employee-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeListTableViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EmployeeLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

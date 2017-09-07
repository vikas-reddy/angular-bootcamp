import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { EmployeeLoaderService } from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: object[];

  constructor(svc: EmployeeLoaderService) {
    svc.loadEmployees()
      .subscribe((res: Response) => this.employeeData = res.json());
  }
}

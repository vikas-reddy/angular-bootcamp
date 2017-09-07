import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeLoaderService, IEmployee } from '../employee-loader.service';

@Component({
  selector: 'employee-list',
  moduleId: __moduleName,
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  list$: Observable<IEmployee[]>;

  constructor(loader: EmployeeLoaderService) {
    this.list$ = loader.getList();
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { EmployeeLoaderService, IEmployee } from './employee-loader.service';

@Injectable()
export class EmployeeRetrieverService implements Resolve<IEmployee> {

  constructor(private loader: EmployeeLoaderService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('started retrieving employee');
    return this.loader.getDetails(route.params['employeeId'])
      .delay(3000)  // Simulate backend latency
      .do(x => console.log('employee information arrived'));
  }
}

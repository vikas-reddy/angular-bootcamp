import { Component, Input } from '@angular/core';

import { IEmployee } from '../employee-loader.service';

@Component({
  selector: 'employee-display',
  moduleId: __moduleName,
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent {
  @Input() employee: IEmployee;
}

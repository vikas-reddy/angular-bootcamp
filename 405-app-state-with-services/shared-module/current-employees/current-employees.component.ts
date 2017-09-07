import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'current-employees',
  templateUrl: './current-employees.component.html',
  moduleId: __moduleName
})
export class CurrentEmployeesComponent {

  @Input() employeeList: string[];

}

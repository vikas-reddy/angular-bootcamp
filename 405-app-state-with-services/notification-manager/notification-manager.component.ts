import { Component } from '@angular/core';

import { EmployeeListService } from './employee-list/employee-list.service';
import { PositionListService } from './position-list/position-list.service';
@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html',
  moduleId: __moduleName
})
export class NotificationManagerComponent {

  constructor(
    private employeeListService: EmployeeListService,
    private positionListService: PositionListService
  ) { }

  ackAll() {
    this.positionListService.ackAll();
    this.employeeListService.ackAll();
  }
}

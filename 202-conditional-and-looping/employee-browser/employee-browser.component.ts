import { Component } from '@angular/core';

const employees = [
  { name: 'Cynthia Cunningham', active: true, roles: ['moderator', 'infrastructure', 'firmware'] },
  { name: 'Peter Clark', active: true, roles: ['contingency', 'protocol'] },
  { name: 'Theresa Soto', active: false, roles: ['implementation'] },
  { name: 'Russell Fisher', active: true, roles: ['implementation', 'application'] },
  { name: 'Elizabeth Hudson', active: true, roles: ['instruction set design'] },
  { name: 'Heather Spencer', active: false, roles: ['moderator'] },
  { name: 'Barbara Tran', active: false, roles: ['protocol'] },
  { name: 'Julia Anderson', active: true, roles: ['instruction set design', 'implementation'] }
];

@Component({
  selector: 'abc-page',
  moduleId: __moduleName,
  templateUrl: './employee-browser.component.html'
})
export class EmployeeBrowserComponent {
  employeeList = employees;
  showInactiveRoles = true;
}

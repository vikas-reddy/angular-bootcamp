import { Component, Input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-list',
  moduleId: __moduleName,
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  // defaults to property name = variable name.
  // can override, @Input('name')
  @Input() list: Order[];
}

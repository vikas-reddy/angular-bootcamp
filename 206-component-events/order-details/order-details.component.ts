import { Component, Input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-details',
  moduleId: __moduleName,
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  @Input('selectedOrderDetails') sod: Order;
}

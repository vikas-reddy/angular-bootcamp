import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-list',
  moduleId: __moduleName,
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input() orders: Order[];

  @Output() selectOrder = new EventEmitter<Order>();

  // -------- external API above, internal implementation below

  select(order: Order) {
    this.selectOrder.emit(order);
  }
}

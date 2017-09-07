import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-header',
  moduleId: __moduleName,
  templateUrl: './order-header.component.html'
})
export class OrderHeaderComponent {
  @Input('customerName') customer: string;
}

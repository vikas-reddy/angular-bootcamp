import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-positions',
  templateUrl: './new-positions.component.html',
  moduleId: __moduleName
})
export class NewPositionsComponent {

  @Input() newPosList: string[];
  @Output() ackPositions = new EventEmitter<string>();

  ack(position: string) {
    this.ackPositions.emit(position);
  }
}

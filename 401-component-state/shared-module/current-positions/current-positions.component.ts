import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'current-positions',
  templateUrl: './current-positions.component.html',
  moduleId: __moduleName
})
export class CurrentPositionsComponent {

  @Input() positionList: string[];

}

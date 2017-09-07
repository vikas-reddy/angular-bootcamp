import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PositionListService } from './position-list.service';

@Component({
  selector: 'position-list',
  moduleId: __moduleName,
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  curPositions: Observable<string[]>;
  newPositions: Observable<string[]>;

  constructor(private positionListService: PositionListService) {
    this.curPositions = positionListService.currentPositions;
    this.newPositions = positionListService.newPositions;
  }

  ackPos(position: string) {
    this.positionListService.ackPosition(position);
  }
}

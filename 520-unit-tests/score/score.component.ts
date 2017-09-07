import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-score',
  moduleId: __moduleName,
  templateUrl: './score.component.html'
})
export class ScoreComponent {

  @Input() value: number;

}

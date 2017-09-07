import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { FacilitiesSearchComponent  } from './facilities-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FacilitiesSearchComponent
  ],
  exports: [FacilitiesSearchComponent],
  imports: [SharedModule, CommonModule]
})
export class FacilitiesModule { }

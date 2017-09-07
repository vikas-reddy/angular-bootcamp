import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumToRangePipe } from './enum-to-range.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EnumToRangePipe
  ],
  exports: [
    EnumToRangePipe
  ]
})
export class AppCommonModule { }

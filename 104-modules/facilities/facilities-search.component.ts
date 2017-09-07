import { Component } from '@angular/core';

@Component({
  selector: 'facilities-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Facilities</span>
        <div>Search for Employee Facilities Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class FacilitiesSearchComponent { }

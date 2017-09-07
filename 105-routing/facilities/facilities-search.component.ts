import { Component } from '@angular/core';

@Component({
  selector: 'facilities-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Facilities Functionality</span>
        <div>Search for Facilities Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class FacilitiesSearchComponent { }

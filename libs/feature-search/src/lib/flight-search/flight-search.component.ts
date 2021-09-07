//  libs/feature-search/src/lib/flight-search/flight-search.component.ts

import { Component } from '@angular/core';

// You might need to add this by hand:
import { FlightDataService } from '@my-project/flight-data';

@Component({
  selector: 'my-project-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {

  flightList$ = this.flightService.load();

  constructor(private flightService: FlightDataService) {
  }

}

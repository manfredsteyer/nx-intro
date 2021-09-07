// libs/flight-data/src/lib/flight-data.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './model/flight';

@Injectable({ providedIn: 'root' })
export class FlightDataService {

    load(): Observable<Flight[]> {

        return of([
          { id: 1, from: 'Frankfurt', to: 'Mallorca', date: new Date().toISOString() },
          { id: 2, from: 'Frankfurt', to: 'Barcelona', date: new Date().toISOString() },
          { id: 3, from: 'Frankfurt', to: 'Ibiza', date: new Date().toISOString() },
        ]);
    }
}

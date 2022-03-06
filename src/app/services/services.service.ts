import { Injectable } from '@angular/core';
import { Flight } from '../flight/flights';
import { mockFlightData } from '../data/mock-flight-data';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  flights: Flight[] = [];

  constructor() {
    this.flights = mockFlightData.mfData;
  }

  getFlight(): Flight[] {
    return this.flights;
  }

  addFlight(f: any): void {
    this.flights.push({
      fullName: f.fullName,
      from: f.from,
      to: f.to,
      type: f.type,
      adults: f.adults,
      departure: f.departure,
      children: f.children,
      infants: f.infants,
      arrival: f.arrival,
    });
  }
}

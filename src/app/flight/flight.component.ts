import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Flight } from './flights';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  flight: Flight[] = [];
  flightForm: FormGroup;
  minDate: Date;

  constructor(private fb: FormBuilder, private flightService: ServicesService) {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required]],
      departure: ['', Validators.required],
      children: ['', [Validators.required]],
      infants: ['', [Validators.required]],
      arrival: ['', Validators.required],
    });
    this.minDate = new Date();
    this.getFlight();
  }
  ngOnInit(): void {}

  getFlight() {
    this.flight = this.flightService.getFlight();
  }

  onSubmit(f: Flight): void {
    const departureYear = f.departure.getFullYear() + 543;
    const departureMonth = f.departure.getMonth();
    const departureDay = f.departure.getDate();
    const arrivalYear = f.arrival.getFullYear() + 543;
    const arrivalMonth = f.arrival.getMonth();
    const arrivalDay = f.arrival.getDate();
    f.departure = new Date(
      departureMonth + 1 + '/' + departureDay + '/' + departureYear
    );
    f.arrival = new Date(
      arrivalMonth + 1 + '/' + arrivalDay + '/' + arrivalYear
    );
    this.flightService.addFlight(f);
    this.flightForm.reset();
  }
}

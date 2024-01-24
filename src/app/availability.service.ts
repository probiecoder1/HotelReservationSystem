import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  selectedDates: { arrival: Date, departure: Date } = { arrival: new Date(), departure: new Date() };
  selectedPeople: number = 0;
}

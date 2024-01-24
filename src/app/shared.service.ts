import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedOptions: { arrivalDate?: Date, departureDate?: Date, people?: number , stay? :number} = {};
  private availabilityCheckCallback: () => void = () => {};
  stay: number | undefined;

  getSelectedOptions(): { arrivalDate?: Date, departureDate?: Date, people?: number } {
    return { ...this.selectedOptions };
  }

  setSelectedOptions(options: { arrivalDate?: Date, departureDate?: Date, people?: number , stay? :number}): void {
    this.selectedOptions = { ...options };
    const arrivalTime = options.arrivalDate ? options.arrivalDate.getTime() : 0;
    const departureTime = options.departureDate ? options.departureDate.getTime() : 0;
    
    const stayDays = Math.ceil((departureTime - arrivalTime) / (1000 * 60 * 60 * 24));
    // this.setDays(stayDays);
    this.stay = stayDays
    console.log(stayDays);
    if (this.availabilityCheckCallback) {
      this.availabilityCheckCallback();
    }
  }
  
  getStayDays(): number | undefined {
    return this.stay;
  }

  onAvailabilityCheck(callback: () => void): void {
    this.availabilityCheckCallback = callback;
  }
}

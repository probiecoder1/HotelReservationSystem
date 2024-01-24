import { Injectable } from '@angular/core';
import { SharedService } from './shared.service'; 

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {
  constructor(private sharedService: SharedService) {}

  getAvailableRooms(): string[] {
    const selectedOptions = this.sharedService.getSelectedOptions();
    const rooms: string[] = []; 
    return rooms.filter(room => this.isRoomAvailableForSelectedOptions(room, selectedOptions));
  }

  private isRoomAvailableForSelectedOptions(room: string, options: { arrivalDate?: Date, departureDate?: Date, people?: number }): boolean {
    return (
      options.people === undefined || 
      true
    );
  }

  calculateTotalAmount(room: any, stayDays: number, applyDiscount: boolean = true): number {
    const baseTotal = room.data.price * stayDays;

    // Apply 5% discount if the number of stay days is 3 or more and applyDiscount is true
    const discountPercentage = stayDays >= 3 && applyDiscount ? 0.05 : 0;

    return baseTotal - (baseTotal * discountPercentage);
  }
}
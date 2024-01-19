// invoice.model.ts

export interface Invoice {
    customerInfo: CustomerInfo;
    bookingDetails: BookingDetails;
    totalCost: number;
  }
  
  export interface CustomerInfo {
    name: string;
    // Add customer information properties
  }
  
  export interface BookingDetails {
    rooms: Room[];
    dates: string;
    rates: number;
  }
  
  export interface Room {
    name: string;
    price: number;
  }
  
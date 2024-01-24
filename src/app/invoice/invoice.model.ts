// invoice.model.ts

export interface Invoice {
  customerInfo: CustomerInfo;
  bookingDetails: BookingDetails;
  totalCost: number;
}

export interface CustomerInfo {
  email : string;
}

export interface BookingDetails {
  rooms: Room[];
}

export interface Room {
  name: string;
  subtitle: string;
  photo: string;
  description: string;
  price: number;
  accommodation: number;
  available?: boolean;
}

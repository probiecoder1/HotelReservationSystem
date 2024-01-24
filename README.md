# Hotel Reservation Application

This Angular application allows users to explore available hotel rooms, check availability, and book rooms, cancel booking and view invoice.

## Instructions

### Prerequisites
- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository
2. Use 'npm install' command in CLI
3. Use 'ng serve' command to run on localhost


### Usage

Home Page:
  Explore hotel photos in the photo slideshow.
  Use the booking section to choose arrival date, departure date, and the number of people.
  Click the "Check Availability" button to proceed to the available rooms.

Gallery:
  View Photos of the hotel and rooms.

All Rooms Page:
  View all available rooms.
  Click the "Book Now" button to book a room.

Book Room Page:
  View details of the selected rooms.
  View stored customer information and stay details.
  If not logged in, you will be redirected to the login page.
  Once all rooms are booked, no rooms will be displayed.

My rooms Page:
  View details of the rooms booked.
  Remove/Cancel booking.
  View the generated invoice.


### Design Choices and Implementation Approach

Components:
  Created components for different pages like home page, available rooms page, book room page, my room page.
  Separated concerns to improve maintainability.

Routing:
  Used Angular Router for navigation between pages.

Authentication:
  Integrated authentication checks before allowing users to book rooms or view invoices.

Shared Service:
  Implemented shared service to pass data between components.

Styling:
  Utilized SCSS for styling to keep styles modular and maintainable.

Error Handling:
  Implemented basic error handling for scenarios like an invalid date range, invalid email, password.


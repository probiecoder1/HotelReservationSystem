import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  minDate: Date;
  maxDate: Date;
  selected1 = 'option2';
  // review = `Really good place to stay in`;

  constructor() {
    const currentYear = new Date().getFullYear();
    const today = new Date()
    this.minDate = today
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  photos: string[] = [
    'assets/photos/1.jpg',
    'assets/photos/3.jpg',
    'assets/photos/4.jpg',
    'assets/photos/5.jpg',
    'assets/photos/6.jpg',
  ];

  reviews = [
    { name: 'Shiva Hari', subtitle: 'Customer', content: 'Really good place to stay in', rating: 4 },
    { name: 'Bishnu Koirala', subtitle: 'Customer, CTO at HamroTech', content: 'Good Services. Liked my stay here', rating: 5 },
    // Add more reviews as needed
  ];

  activeSlide: number = 0;

  ngOnInit() {
    // Set up an interval to change the active slide every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.photos.length;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryPhotos = [
    { src: 'assets/photos/1.jpg', alt: 'Photo 1' },
    { src: 'assets/photos/2.jpg', alt: 'Photo 2' },
    { src: 'assets/photos/3.jpg', alt: 'Photo 3' },
    { src: 'assets/photos/4.jpg', alt: 'Photo 4' },
    { src: 'assets/photos/5.jpg', alt: 'Photo 5' },
    { src: 'assets/photos/6.jpg', alt: 'Photo 6' },
  ];

}

import { Component } from '@angular/core';
import { CarouselCard } from './carousel-card/carousel-card';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CarouselCard],
  templateUrl: './carousel-section.html',
  styleUrl: './carousel-section.css'
})
export class CarouselSection {}
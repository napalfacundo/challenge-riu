import { Component } from '@angular/core';
import { CarouselCard, CarouselCardData } from './carousel-card/carousel-card';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CarouselCard],
  templateUrl: './carousel-section.html',
  styleUrl: './carousel-section.css'
})
export class CarouselSection {
  readonly slides: CarouselCardData[] = [
    {
      id: 1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
    },
    {
      id: 4,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      ctaLabel: 'Lorem ipsum',
    },
  ];
}
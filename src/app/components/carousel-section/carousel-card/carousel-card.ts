import { Component, Input } from '@angular/core';

export interface CarouselCardData {
  id: number;
  title: string;
  description: string;
  ctaLabel: string;
}

const defaultCarouselCardData: CarouselCardData = {
  id: 0,
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  ctaLabel: 'Lorem ipsum',
};

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.html',
})
export class CarouselCard {
  @Input() data: CarouselCardData = defaultCarouselCardData;
}
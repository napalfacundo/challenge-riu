import { Component, Input } from '@angular/core';

export interface HeroCardData {
  dateLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
}

const defaultHeroCardData: HeroCardData = {
  dateLabel: 'Lorem ipsum dolor sit amet.',
  title:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  ctaLabel: 'Lorem ipsum',
};

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css'
})
export class HeroCard {
  @Input() data: HeroCardData = defaultHeroCardData;
}

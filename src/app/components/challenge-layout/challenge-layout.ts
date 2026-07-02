import { Component } from '@angular/core';
import { HeroCard, HeroCardData } from '../hero-card/hero-card';
import { FeaturesGrid } from '../features-grid/features-grid';
import { CarouselSection } from '../carousel-section/carousel-section';

@Component({
  selector: 'app-challenge-layout',
  standalone: true,
  imports: [HeroCard, FeaturesGrid, CarouselSection],
  templateUrl: './challenge-layout.html',
  styleUrl: './challenge-layout.css',
})
export class ChallengeLayout {
  readonly heroData: HeroCardData = {
    dateLabel: 'Lorem ipsum dolor sit amet.',
    title:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    ctaLabel: 'Lorem ipsum',
  };
}

import { Component } from '@angular/core';
import { FeatureCard, FeatureCardData } from './feature-card/feature-card';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [FeatureCard],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {
  readonly cards: FeatureCardData[] = [
    {
      id: 1,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: true,
    },
    {
      id: 2,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: true,
    },
    {
      id: 3,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: true,
    },
    {
      id: 4,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: true,
    },
    {
      id: 5,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: false,
    },
    {
      id: 6,
      dateLabel: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
      href: '#',
      showOnMobile: false,
    },
  ];
}

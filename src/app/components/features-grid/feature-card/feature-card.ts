import { Component, Input } from '@angular/core';

export interface FeatureCardData {
  id: number;
  dateLabel: string;
  title: string;
  description: string;
  href: string;
  showOnMobile: boolean;
}

const defaultFeatureCardData: FeatureCardData = {
  id: 0,
  dateLabel: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  href: '#',
  showOnMobile: true,
};

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCard {
  @Input() data: FeatureCardData = defaultFeatureCardData;
}

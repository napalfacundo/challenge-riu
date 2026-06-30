import { Component } from '@angular/core';
import { HeroCard } from '../hero-card/hero-card';
import { FeaturesGrid } from '../features-grid/features-grid';
import { CarouselSection } from '../carousel-section/carousel-section';

@Component({
  selector: 'app-challenge-layout',
  standalone: true,
  imports: [HeroCard, FeaturesGrid, CarouselSection],
  templateUrl: './challenge-layout.html',
  styleUrl: './challenge-layout.css',
})
export class ChallengeLayout {}

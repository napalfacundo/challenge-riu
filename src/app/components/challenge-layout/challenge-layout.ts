import { Component, ViewEncapsulation } from '@angular/core';
import { HeroCard } from '../hero-card/hero-card';
import { FeaturesGrid } from '../features-grid/features-grid';

@Component({
  selector: 'app-challenge-layout',
  standalone: true,
  imports: [HeroCard, FeaturesGrid],
  templateUrl: './challenge-layout.html',
  styleUrl: './challenge-layout.css',
})
export class ChallengeLayout {}

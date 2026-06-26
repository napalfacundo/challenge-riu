import { Component, ViewEncapsulation } from '@angular/core';
import { HeroCard } from '../hero-card/hero-card';

@Component({
  selector: 'app-challenge-layout',
  standalone: true,
  imports: [HeroCard],
  templateUrl: './challenge-layout.html',
  encapsulation: ViewEncapsulation.None
})
export class ChallengeLayout {}

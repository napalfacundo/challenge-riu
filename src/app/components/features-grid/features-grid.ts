import { Component } from '@angular/core';
import {FeatureCard} from './feature-card/feature-card';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [FeatureCard],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {}

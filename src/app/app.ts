import { Component, signal } from '@angular/core';
import { ChallengeLayout } from './components/challenge-layout/challenge-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChallengeLayout],
  templateUrl: './app.html',
  // styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('challenge-layout');
}

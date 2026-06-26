import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeLayout } from './challenge-layout';

describe('ChallengeLayout', () => {
  let component: ChallengeLayout;
  let fixture: ComponentFixture<ChallengeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

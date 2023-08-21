import { TestBed } from '@angular/core/testing';

import { ScoreCalculatorService } from './score-calculator.service';

describe('ScoreCalculatorService', () => {
  let service: ScoreCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

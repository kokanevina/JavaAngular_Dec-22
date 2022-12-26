import { TestBed } from '@angular/core/testing';

import { MathCalcService } from './math-calc.service';

describe('MathCalcService', () => {
  let service: MathCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

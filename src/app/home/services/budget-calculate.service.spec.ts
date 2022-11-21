import { TestBed } from '@angular/core/testing';

import { BudgetCalculateService } from './budget-calculate.service';

describe('BudgetCalculateService', () => {
  let service: BudgetCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

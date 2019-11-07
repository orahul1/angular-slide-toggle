import { TestBed } from '@angular/core/testing';

import { AngSlideToggleService } from './ang-slide-toggle.service';

describe('AngSlideToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngSlideToggleService = TestBed.get(AngSlideToggleService);
    expect(service).toBeTruthy();
  });
});

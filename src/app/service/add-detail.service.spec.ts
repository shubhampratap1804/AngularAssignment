import { TestBed } from '@angular/core/testing';

import { AddDetailService } from './add-detail.service';

describe('AddDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDetailService = TestBed.get(AddDetailService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmpAddEditService } from './emp-add-edit.service';

describe('EmpAddEditService', () => {
  let service: EmpAddEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAddEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

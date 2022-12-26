import { TestBed } from '@angular/core/testing';

import { JsonCrudService } from './json-crud.service';

describe('JsonCrudService', () => {
  let service: JsonCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { SourcesService } from './data.service';

describe('SourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourcesService]
    });
  });

  it('should be created', inject([SourcesService], (service: SourcesService) => {
    expect(service).toBeTruthy();
  }));
});

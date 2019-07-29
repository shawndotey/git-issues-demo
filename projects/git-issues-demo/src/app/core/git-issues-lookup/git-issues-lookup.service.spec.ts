import { TestBed } from '@angular/core/testing';

import { GitIssuesLookupService } from './git-issues-lookup.service';

describe('GitIssuesLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitIssuesLookupService = TestBed.get(GitIssuesLookupService);
    expect(service).toBeTruthy();
  });
});

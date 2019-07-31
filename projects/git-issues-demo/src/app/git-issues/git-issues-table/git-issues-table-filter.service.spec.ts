import { TestBed } from '@angular/core/testing';

import { GitIssuesTableFilterService } from './git-issues-table-filter.service';

describe('GitIssuesTableFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitIssuesTableFilterService = TestBed.get(GitIssuesTableFilterService);
    expect(service).toBeTruthy();
  });
});

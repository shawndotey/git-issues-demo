import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitIssuesSearchComponent } from './git-issues-search.component';

describe('GitIssuesSearchComponent', () => {
  let component: GitIssuesSearchComponent;
  let fixture: ComponentFixture<GitIssuesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitIssuesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitIssuesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

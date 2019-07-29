import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitIssuesOverviewWidgetComponent } from './git-issues-overview-widget.component';

describe('GitIssuesOverviewWidgetComponent', () => {
  let component: GitIssuesOverviewWidgetComponent;
  let fixture: ComponentFixture<GitIssuesOverviewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitIssuesOverviewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitIssuesOverviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { GitIssuesTableFilterService } from './git-issues-table-filter.service';
import { GitIssuesResults } from './../../core/git-issues-lookup/model/git-issues-results';
import { GitIssuesLookupService } from '@gid/core/git-issues-lookup/git-issues-lookup.service';
import { Component, OnInit, ViewChild, AfterViewInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'gid-git-issues-table',
  templateUrl: './git-issues-table.component.html',
  styleUrls: ['./git-issues-table.component.scss'],
  providers: [
    GitIssuesTableFilterService
  ]
})
export class GitIssuesTableComponent implements OnInit , AfterViewInit, OnDestroy, OnChanges {

  @Input() gitRepo: string;
  @Input() textSearch: string;
  constructor(
    private issuesLookup: GitIssuesLookupService,
    private filterIssuesService: GitIssuesTableFilterService
  ) {
    this.dataSource = new MatTableDataSource([]);

  }
  private _onDestroy = new Subject<void>();
  today: number = Date.now();

  displayedColumns = ['user', 'issue', 'assignee'];
  // displayedColumns = ['id',  'title', 'body'];
  dataSource: MatTableDataSource<GitIssuesResults>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {

  }

  ngOnChanges(changes) {
    console.log('GitIssuesTableComponent changes', changes);
    if (changes.gitRepo) {
      this.pullGitIssues();
    }
    if (changes.textSearch) {
      this.filterCurrentIssues();
    }

  }
  pullGitIssues() {
    this.issuesLookup.getIssues$(this.gitRepo, 7).pipe(
       takeUntil(this._onDestroy)
    ).subscribe(issues => {
      this.updateCurrentIssues(issues);
      this.filterCurrentIssues();
    });
  }
  updateCurrentIssues(issues) {
    this.filterIssuesService.setAllCurrentIssues(issues);
  }
  filterCurrentIssues() {
    this.dataSource.data = this.filterIssuesService.filterCurrentIssues(this.textSearch);
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}


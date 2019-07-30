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
})
export class GitIssuesOrdersTableComponent implements OnInit , AfterViewInit, OnDestroy, OnChanges {

  @Input() gitRepo: string;
  @Input() searching$: Observable<boolean>;
  constructor(
    private issuesLookup: GitIssuesLookupService
  ) {
    this.dataSource = new MatTableDataSource([]);

  }
  private gitRepo$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _onDestroy = new Subject<void>();
  today: number = Date.now();

  displayedColumns = ['created', 'user', 'issue', 'assignee'];
  // displayedColumns = ['id',  'title', 'body'];
  dataSource: MatTableDataSource<GitIssuesResults>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.initGitIssues();
  }
  initGitIssues() {
    this.issuesLookup.getIssues$(this.gitRepo, 7).pipe(
       takeUntil(this._onDestroy)
    ).subscribe(issues => {
      this.dataSource.data = issues;
    });
    this.gitRepo$.next(this.gitRepo);
  }
  ngOnChanges(changes) {
    this.gitRepo$.next(changes.gitRepo.currentValue );
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}


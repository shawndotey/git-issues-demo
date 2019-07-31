import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, Output, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'gid-git-issues-search',
  templateUrl: './git-issues-search.component.html',
  styleUrls: ['./git-issues-search.component.scss']
})
export class GitIssuesSearchComponent implements OnInit, OnDestroy  {
  @Output() searchText$: Observable<string>;
  constructor() {
    this.searchText$ = this._searchText$.asObservable();
    // .pipe(
    //   debounceTime(300)
    // );
   }
  public searchForm = new FormGroup({
    searchText: new FormControl('')
  });
  private _searchText$ = new BehaviorSubject<string>('');
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(changes => {
      console.log('GitIssuesSearchComponent searchForm.valueChanges', changes);
      this._searchText$.next(changes.searchText);
    });


  }
  clearSearchText() {
    this.searchForm.controls.searchText.setValue('');
  }


  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}

import { Injectable } from '@angular/core';
import { GitIssuesResults } from '@gid/core/git-issues-lookup/model/git-issues-results';

@Injectable({
  providedIn: 'root'
})
export class GitIssuesTableFilterService {

  constructor() { }

  private allCurrentIssues: GitIssuesResults[] = [];

  public setAllCurrentIssues(allCurrentIssues: GitIssuesResults[]) {
    this.allCurrentIssues = allCurrentIssues;
  }

  public filterCurrentIssues(titleAndBodyContains) {
    
    return this.allCurrentIssues.filter(issue => {
      if (issue.title.includes(titleAndBodyContains) || issue.body.includes(titleAndBodyContains)) {
      return true;
      }
    });
  }
}

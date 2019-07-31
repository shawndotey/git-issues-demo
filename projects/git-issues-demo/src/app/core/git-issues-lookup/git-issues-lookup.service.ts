import { GitUser } from './model/git-user';
import { GitIssuesResults } from './model/git-issues-results';
import { map } from 'rxjs/operators';
import { environment } from '@gid/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GitIssuesLookupService {
  baseUrl = environment.gitApiUrl + 'repos/';
  constructor(
    private httpClient: HttpClient
    ) {}

  getIssues$(userAndRepoPathPart: string, days?: number) {
    let params = '';
    if ( days !== undefined ) {
      params = this.addparam(params, 'since', this.daysAgoAsString(days) );
    }
    return this.httpClient.get(this.baseUrl + userAndRepoPathPart + '/issues' + params).pipe(
      map((jsonArray: any[] ) => {
        return jsonArray.map(rawIssue => {
          const result = this.buildIssueFromRaw(rawIssue);
          result.assigneeUser = this.buildUser(rawIssue.assignee);
          result.user = this.buildUser(rawIssue.user);
          return result;
        });
      })
    );
  }
  private daysAgoAsString(days: number) {
    const dateAgo = new Date();
    dateAgo.setHours(0, 0, 0, 0);
    dateAgo.setDate(dateAgo.getDate() - days);
    const dateParam = formatDate(dateAgo, 'y-MM-d', 'en-US');
    return dateParam;
  }

  private buildIssueFromRaw(rawIssue): GitIssuesResults {
    const result = new  GitIssuesResults();
    result.title = rawIssue.title;
    result.bodyUrl = rawIssue.html_url;
    result.issueUrl = rawIssue.html_url;
    result.createDateTime = rawIssue.created_at;
    result.updatedDateTime = rawIssue.updated_at;
    result.body =  rawIssue.body;
    return result;
  }


  private buildUser(rawUser): GitUser {
    const user = new GitUser();
    if (rawUser) {
      user.userName = rawUser.login || '';
      user.avatarUrl = rawUser.avatar_url || '';
      user.userUrl = rawUser.html_url || '';
    }
    return user;
  }

  private addparam(existingParams, param, value) {
    if (!existingParams) {
      return '?' + param + '=' + value;
    }
    return existingParams + '&' + param + '=' + value;
  }
}

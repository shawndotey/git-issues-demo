import { GitUser } from './model/git-user';
import { GitIssuesResults } from './model/git-issues-results';
import { map } from 'rxjs/operators';
import { environment } from '@gid/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitIssuesLookupService {
  baseUrl = environment.gitApiUrl + 'repos/';
  constructor(private httpClient: HttpClient) {}

  getIssues$(userAndRepoPathPart: string, days = 7) {
    return this.httpClient.get(this.baseUrl + userAndRepoPathPart + '/issues').pipe(
      map((jsonArray: any[] ) => {

        return jsonArray.map(rawIssue => {
          const result = new  GitIssuesResults();
          result.title = rawIssue.title;
          result.url = rawIssue.url;
          result.createDateTime = rawIssue.created_at;
          result.updatedDateTime = rawIssue.updated_at;
          result.body =  rawIssue.body;
          result.assigneeUser = this.buildUser(rawIssue.assignee);
          result.user = this.buildUser(rawIssue.user);
          return result;
        });

      })

    );
  }
  buildUser(rawUser): GitUser {

    const user = new GitUser();
    if (rawUser) {
      user.userName = rawUser.login || '';
      user.avatarUrl = rawUser.avatar_url || '';
      user.url = rawUser.url || '';
    }
    return user;
  }
}

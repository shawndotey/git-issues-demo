import { GitUser } from './git-user';

export class GitIssuesResults {
 // id;
 id: number;
 // url;
 url: string;
 // created_at;
 createDateTime: string;
 // updated_at
 updatedDateTime: string;
 // title;
 title: string;
 // body;
 body: string;
 // user;
 user: GitUser;
 // assignee;
 assigneeUser: GitUser;
}

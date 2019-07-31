import { GitIssuesSearchModule } from './git-issues-search/git-issues-search.module';
import { NgModule } from '@angular/core';
import { GitIssuesOverviewWidgetModule } from './git-issues-overview-widget/git-issues-overview-widget.module';
import { SharedModule } from '@gid/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    GitIssuesSearchModule,
    GitIssuesOverviewWidgetModule
  ],
  exports: [
    GitIssuesSearchModule,
    GitIssuesOverviewWidgetModule
  ]
})
export class GitIssuesModule { }

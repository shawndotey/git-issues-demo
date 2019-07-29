import { NgModule } from '@angular/core';
import { GitIssuesOverviewWidgetModule } from './git-issues-overview-widget/git-issues-overview-widget.module';
import { SharedModule } from '@gid/shared/shared.module';
import { GitIssuesOrdersTableModule } from './git-issues-table/git-issues-table.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    GitIssuesOverviewWidgetModule,
    GitIssuesOrdersTableModule,
  ]
})
export class GitIssuesModule { }

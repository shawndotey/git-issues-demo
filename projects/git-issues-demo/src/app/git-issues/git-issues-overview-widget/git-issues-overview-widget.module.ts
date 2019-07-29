import { GitIssuesOrdersTableModule } from './../git-issues-table/git-issues-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitIssuesOverviewWidgetComponent } from './git-issues-overview-widget.component';

@NgModule({
  declarations: [GitIssuesOverviewWidgetComponent],
  imports: [
    CommonModule,
    GitIssuesOrdersTableModule
  ],
  exports: [
    GitIssuesOverviewWidgetComponent
  ]
})
export class GitIssuesOverviewWidgetModule { }

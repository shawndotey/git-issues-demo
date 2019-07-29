/// derived from https://stackblitz.com/edit/angular-material-table-responsive
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitIssuesOrdersTableComponent } from './git-issues-table.component';
import { MatMenuModule, MatIconModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [GitIssuesOrdersTableComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    GitIssuesOrdersTableComponent
  ]

})
export class GitIssuesOrdersTableModule { }

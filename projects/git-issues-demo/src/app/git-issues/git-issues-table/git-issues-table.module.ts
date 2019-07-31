/// derived from https://stackblitz.com/edit/angular-material-table-responsive
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitIssuesTableComponent } from './git-issues-table.component';
import { MatMenuModule, MatIconModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [GitIssuesTableComponent],
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
    GitIssuesTableComponent
  ]

})
export class GitIssuesTableModule { }

import { GitIssuesLookupService } from './git-issues-lookup.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GitIssuesLookupService,
  ]
})
export class GitIssuesLookupModule { }

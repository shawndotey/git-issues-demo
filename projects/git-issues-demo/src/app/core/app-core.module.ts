import { ConfigModule } from './config/config.module';
import { NgModule } from '@angular/core';
import { GitIssuesLookupModule } from './git-issues-lookup/git-issues-lookup.module';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule,
    GitIssuesLookupModule
  ],
  exports: [
  ]
})
export class AppCoreModule { }

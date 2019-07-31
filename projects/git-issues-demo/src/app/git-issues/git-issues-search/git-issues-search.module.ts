import { NgModule } from '@angular/core';
import { GitIssuesSearchComponent } from './git-issues-search.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GitIssuesSearchComponent],
  imports: [
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  exports: [
    GitIssuesSearchComponent
  ]
})
export class GitIssuesSearchModule { }

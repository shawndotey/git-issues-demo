import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gid-git-issues-overview-widget',
  templateUrl: './git-issues-overview-widget.component.html',
  styleUrls: ['./git-issues-overview-widget.component.scss']
})
export class GitIssuesOverviewWidgetComponent implements OnInit {
  @Input() gitRepo: string;
  constructor() { }

  ngOnInit() {
  }

}

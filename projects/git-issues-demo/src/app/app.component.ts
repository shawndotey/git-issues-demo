import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Git Issues Demo';

  constructor() {}

  ngOnInit() {
  }
  searchTextChange(searchText) {
    console.log('searchTextChange app', searchText);
  }
}

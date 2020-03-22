import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../model/activity';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']

})
export class FeedListComponent implements OnInit {

  actionsUrl = 'https://lvve8kdo9b.execute-api.eu-central-1.amazonaws.com/prod/actions';
  actions: Activity[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get(this.actionsUrl).subscribe(data => {
      let items: any;
      items = data['data']['Items'];
      for (const item of items) {
        this.actions.push(item.Action);
      }

    });
  }


}

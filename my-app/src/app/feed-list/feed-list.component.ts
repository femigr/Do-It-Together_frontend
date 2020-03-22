import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../model/activity';
import { isNgTemplate } from '@angular/compiler';

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

  preview = false;

  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.http.get(this.actionsUrl).subscribe(data => {
      let items: any;
      items = (data['data']['Items']).sort((n1,n2)=> n1.CreatedAt < n2.CreatedAt);
      for (const item of items) {
        this.actions.push(item.Action);
      }
    });
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }


}

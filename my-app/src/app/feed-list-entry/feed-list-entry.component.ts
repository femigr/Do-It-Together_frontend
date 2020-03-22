import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../model/activity';

@Component({
  selector: 'app-feed-list-entry',
  templateUrl: './feed-list-entry.component.html',
  styleUrls: ['./feed-list-entry.component.scss']
})
export class FeedListEntryComponent implements OnInit {

  @Input()
  action: Activity;


  constructor() { }

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
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

}

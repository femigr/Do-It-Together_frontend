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

  ngOnInit(): void {
  }

}

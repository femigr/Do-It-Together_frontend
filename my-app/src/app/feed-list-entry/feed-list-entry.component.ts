import { Component, OnInit, Input } from '@angular/core';
import { FeedSummary } from 'src/app/module/feed-summary';

@Component({
  selector: 'app-feed-list-entry',
  templateUrl: './feed-list-entry.component.html',
  styleUrls: ['./feed-list-entry.component.scss']
})
export class FeedListEntryComponent implements OnInit {

  @Input()
  feedSummary: FeedSummary;


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FeedSummary } from 'src/app/module/feed-summary';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FeedListComponent implements OnInit {

  // Mocked data
  feed: FeedSummary = {
    id: '1',
    title: 'Yoga Class',
    description: 'Section 1',
    creator: 'John doe',
    avatarImageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  };

  @Input() feedSummaryList = [];


  constructor() {

    for (let i = 0; i < 20; ++i) {
      this.feedSummaryList['push'](this.feed);
    }
  }

  ngOnInit(): void {
  }


}

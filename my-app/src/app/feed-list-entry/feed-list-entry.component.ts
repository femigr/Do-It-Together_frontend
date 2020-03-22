import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../model/activity';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-feed-list-entry',
  templateUrl: './feed-list-entry.component.html',
  styleUrls: ['./feed-list-entry.component.scss']
})
export class FeedListEntryComponent implements OnInit {

  @Input()
  action: Activity;


  constructor(private snackBarService: MatSnackBar) { }

  openComingSoonSnackBar() {
    this.snackBarService.open('Coming Soon :)', null, {
      duration: 3000,
    });
  }

  ngOnInit(): void {
  }

}

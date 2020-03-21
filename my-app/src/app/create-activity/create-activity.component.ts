import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {DateSelectorComponent} from 'src/app/date-selector/date-selector.component'

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {

  activities = ['Sport', 'Lesen'];

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(DateSelectorComponent);
  }
}





import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-preview',
  templateUrl: './activity-preview.component.html',
  styleUrls: ['./activity-preview.component.scss']
})
export class ActivityPreviewComponent implements OnInit {

  @Input()
  activityForm;

  constructor() { }

  ngOnInit(): void {
  }

}

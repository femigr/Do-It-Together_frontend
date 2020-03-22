import { Activity } from './../model/activity';
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-create-activity-component',
  templateUrl: 'create-activity.component.html',
  styleUrls: ['create-activity.component.scss']
})
export class CreateActivityComponent {

  activityTypes = ['Kaffee Pause', 'Buch zusammen lesen', 'Yoga Session'];
  activity = new Activity();
  activityForm;

  constructor(private formBuilder: FormBuilder) {
    this.activityForm = this.formBuilder.group({
      name: [ this.activity.name, Validators.required ],
      description: [ this.activity.description, null ],
      date: [ this.activity.date, null ],
      type: [ this.activity.type, null ]
    });
  }

  createActivity(): void {

    this.activity = Object.assign({}, this.activityForm.value);
    console.log(this.activity);
  }


}

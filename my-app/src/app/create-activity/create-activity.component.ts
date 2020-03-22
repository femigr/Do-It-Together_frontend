import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Activity } from './../model/activity';


@Component({
  selector: 'app-create-activity-component',
  templateUrl: 'create-activity.component.html',
  styleUrls: ['create-activity.component.scss']
})
export class CreateActivityComponent {

  // TODO: Fetch from database or save in enum
  activityTypes = ['Kaffee Pause', 'Buch zusammen lesen', 'Yoga Session'];
  activity = new Activity();
  activityForm;

  constructor(private formBuilder: FormBuilder) {

    // Init form and link to model
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

    // Call API endpoint here
  }


}

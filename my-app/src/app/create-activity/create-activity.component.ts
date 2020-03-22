import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Activity } from './../model/activity';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


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
  putActionUrl = 'https://lvve8kdo9b.execute-api.eu-central-1.amazonaws.com/prod/actions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

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
    var out = JSON.stringify({"action": this.activity});
    this.http.post(this.putActionUrl, out, this.httpOptions);
  }


}

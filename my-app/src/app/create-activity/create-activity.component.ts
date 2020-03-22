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
  currentstep;

  amountofsteps = 3;


  constructor(private formBuilder: FormBuilder) {
    this.currentstep = 0;
    // Init form and link to model
    this.activityForm = this.formBuilder.group({
      name: [ this.activity.name, Validators.required ],
      description: [ this.activity.description, null ],
      username: [ this.activity.username, Validators.required ],
      date: [ this.activity.date, null ],
      link: [ this.activity.link, null ],
      type: [ this.activity.type, null ]
    });
  }

  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    if (w < breakpoint) {
      this.amountofsteps=4;
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }


  createActivity(): void {

    this.activity = Object.assign({}, this.activityForm.value);
    console.log(this.activity);

    // Call API endpoint here
  }

  back(): void{
    this.currentstep -= 1;
  }
  continue(): void{
    this.currentstep += 1;
  }


}

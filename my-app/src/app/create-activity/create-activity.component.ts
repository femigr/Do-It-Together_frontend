import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'create-activity-component',
  templateUrl: 'create-activity.component.html',
  styleUrls: ['create-activity.component.scss']
})
export class CreateActivityComponent {
  constructor() {

  }

  title = "";
  description = "";
  date = new FormControl(new Date());



  openLink(event: MouseEvent): void {
    event.preventDefault();
  }

  onSubmit(): void{
    try{//TODO: API-Call
      console.log(this.title);
      console.log(this.description);
      console.log(this.date);
    }
    catch(err){
      //Alert oder sowas
    }
  }


}

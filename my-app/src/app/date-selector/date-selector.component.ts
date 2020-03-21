import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'date-selector-component',
  templateUrl: 'date-selector.component.html',
  styleUrls: ['date-selector.component.scss']
})
export class DateSelectorComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<DateSelectorComponent>) {}


  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onSubmit(): void{
    this._bottomSheetRef.dismiss();
    console.log(this.date);
  }


}

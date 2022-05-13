import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Animaciones
import {BrowserModule} from '@angular/platform-browser'
//Spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';

//Slider
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

//Tolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//icons
import {MatIconModule} from '@angular/material/icon';
//Botton
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule}from '@angular/material/grid-list'

//Card
import {MatCardModule} from '@angular/material/card';
//Modal
import {MatDialogModule} from '@angular/material/dialog';
//DatePicker
import {MatDatepickerModule} from '@angular/material/datepicker';
//Forms , los datePickers no funcionan sin ellos 
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MomentDateAdapter } from '@angular/material-moment-adapter';





class library{
 static returnImport(){
  return [MatToolbarModule,MatDatepickerModule,MatFormFieldModule,
    MatIconModule,MatSliderModule,BrowserModule,MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,MatButtonModule,MatGridListModule,MatCardModule
    ,NgCircleProgressModule,MatDialogModule]
 }

}



export const DateFormat = {
  parse: {
  dateInput: 'input',
  },
 display: {
 dateInput: 'MM/DD/YYYY',
 monthYearLabel: 'MMMM YYYY',
 dateA11yLabel: 'MM/DD/YYYY',
 monthYearA11yLabel: 'MMMM YYYY',
 }
 };

 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false,
      "subtitleColor":"#841515",
      "subtitleFontWeight":"400"
    })
  ],exports:[
    library.returnImport()
  ],providers:[
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: DateFormat }
  ]
})
export class MaterializeModule {}

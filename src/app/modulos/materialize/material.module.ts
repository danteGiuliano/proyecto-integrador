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
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';






class library{
 static returnImport(){
  return [MatToolbarModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,
    MatIconModule,MatSliderModule,BrowserModule,MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,MatButtonModule,MatGridListModule,MatCardModule
    ,NgCircleProgressModule,MatDialogModule]
 }

}
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false
    })
  ],exports:[
    library.returnImport()
  ]
})
export class MaterializeModule {}

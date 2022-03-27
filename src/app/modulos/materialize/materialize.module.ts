import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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



class library{
 static returnImport(){
  return [MatToolbarModule,
    MatIconModule,MatSliderModule,
    MatProgressSpinnerModule,
    FormsModule,MatButtonModule,MatGridListModule,MatCardModule,NgCircleProgressModule,MatDialogModule]
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

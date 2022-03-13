import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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

class library{
 static returnImport(){
  return [MatToolbarModule,
    MatIconModule,MatSliderModule,
    MatProgressSpinnerModule,
    FormsModule,MatButtonModule,MatGridListModule,MatCardModule]
 }

}
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    library.returnImport()
  ]
})
export class MaterializeModule {}

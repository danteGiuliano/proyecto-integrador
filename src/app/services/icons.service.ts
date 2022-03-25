import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Injectable({
  providedIn: 'root'
})



export class IconsService {


  constructor(private iconRegistry: MatIconRegistry,private dom:DomSanitizer) {
    this.iconRegistry.addSvgIcon("github",this.dom.bypassSecurityTrustResourceUrl('../../assets/github.svg'));
    this.iconRegistry.addSvgIcon("linkedin",this.dom.bypassSecurityTrustResourceUrl('../../assets/linkedin.svg'));
    this.iconRegistry.addSvgIcon("argentina",this.dom.bypassSecurityTrustResourceUrl('../../assets/argentina.svg'));
    
  }
  initialize(){
  
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interfaces/persona';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public nombre:string="";
  public persona:Persona ={id:1,nombre:"",apellido:"",acerca_de:"",especialidad:""}
  constructor(private user:DanterestService) { 
   
  }

  ngOnInit():void {
     /*Traigo en un servicio los datos de la persona */
     this.user.getUsuario().subscribe((resp:Persona)=>{
      this.persona=resp;
    })
  }

}

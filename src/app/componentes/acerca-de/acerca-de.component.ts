import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalBiografiaComponent } from 'src/app/component/modal-biografia/modal-biografia.component';
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
  constructor(private user:DanterestService,private modal:MatDialog) { 
   
  }
  openBibliografiaEditMode(){
    this.modal.open(ModalBiografiaComponent)
  }

  ngOnInit():void {
     /*Traigo en un servicio los datos de la persona */
     this.user.getUsuario().subscribe((resp:Persona)=>{
      this.persona=resp;
    })
  }

}

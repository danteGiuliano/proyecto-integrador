import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBiografiaComponent } from 'src/app/component/modal-biografia/modal-biografia.component';
import { Persona } from 'src/app/interfaces/persona';
import { ComucacionService } from 'src/app/services/comucacion.service';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public persona:Persona ={id:1,nombre:"",apellido:"",acerca_de:"",especialidad:""}
  constructor(private user:DanterestService,private modal:MatDialog,
    private comunicacion:ComucacionService) { 
   
  }
  openBibliografiaEditMode(){
    this.comunicacion.agregarPersona(this.persona)
    this.modal.open(ModalBiografiaComponent)
  }

  ngOnInit():void {
     /*Traigo en un servicio los datos de la persona */
     this.user.getUsuario().subscribe((resp:Persona)=>{
      this.persona=resp;
    })
  }

}

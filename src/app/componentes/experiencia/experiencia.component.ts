import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalExperienciaComponent } from 'src/app/modales/modal-experiencia/modal-experiencia.component';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { ComucacionService } from 'src/app/services/comucacion.service';
import { DanterestService } from '../../services/danterest.service';
import { EliminarComponent } from '../../modales/eliminar/eliminar.component';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public esperiencias:Experiencia[]|any=[]
  
  constructor(private modal:MatDialog,private api:DanterestService,
    private comunicacion:ComucacionService,private au:AutorizacionService) {
     }

     autorizado(){
       return this.au.estaAutorizado()
     }

  ngOnInit(): void {
    this.api.getExperiencias().subscribe(data=>{
      this.esperiencias=data;
    })
  }

  openEditMode(experiencia:Experiencia){
    this.comunicacion.actualizarExperiencia(experiencia);
    this.comunicacion.actualizarPilaExperiencia(this.esperiencias);
    this.modal.open(ModalExperienciaComponent)
  }
  openAgregarExperiencia(){
    this.comunicacion.actualizarPilaExperiencia(this.esperiencias);
    this.modal.open(ModalExperienciaComponent)
    /* .afterClosed().subscribe((data:Experiencia)=>{
      this.esperiencias.push(data)
    }); */
   
  }
  elimnar(experiencia:Experiencia){
    this.comunicacion.generic(this.esperiencias,experiencia)
    this.modal.open(EliminarComponent).afterClosed().subscribe((data:Experiencia)=>{
      this.esperiencias=data
    })
  }
}

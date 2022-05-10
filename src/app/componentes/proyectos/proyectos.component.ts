import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import { MatDialog } from '@angular/material/dialog';
import { ModalProyectoComponent } from '../../modales/modal-proyecto/modal-proyecto.component';
import { ComucacionService } from '../../services/comucacion.service';
import { EliminarComponent } from '../../modales/eliminar/eliminar.component';
import { DanterestService } from '../../services/danterest.service';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos:Proyecto[]=[]
  constructor(private modal:MatDialog,
    private au:AutorizacionService, private comunicacion:ComucacionService,private api:DanterestService) { }

  ngOnInit(): void {
    this.api.getproyectos().subscribe(data=>{
      this.proyectos=data;
    })
  }
  autorizado(){
    return this.au.estaAutorizado()
  }

  edit_proyecto(proyecto:Proyecto){
    this.comunicacion.actualizarProyecto(proyecto)
    this.comunicacion.actualizarPilaProyecto(this.proyectos)

    this.modal.open(ModalProyectoComponent)


  }
  openAgregarProyecto(){
    this.comunicacion.actualizarPilaProyecto(this.proyectos)
    this.modal.open(ModalProyectoComponent)
  }
  delete(proyecto:Proyecto){
    this.comunicacion.generic(this.proyectos,proyecto)
    this.modal.open(EliminarComponent).afterClosed().subscribe(data=>{
      this.proyectos=data;
    })

  }

  redirigir(url:string){
    window.open(url,"_blank")
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalExperienciaComponent } from 'src/app/modales/modal-experiencia/modal-experiencia.component';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { ComucacionService } from 'src/app/services/comucacion.service';
import { DanterestService } from '../../services/danterest.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public esperiencias:Experiencia[]|any=[]
  
  constructor(private modal:MatDialog,private api:DanterestService,
    private comunicacion:ComucacionService) { }

  ngOnInit(): void {
  }

  openEditMode(experiencia:Experiencia){
    this.comunicacion.actualizarExperiencia(experiencia);
    this.modal.open(ModalExperienciaComponent)
  }
  openAgregarExperiencia(){
    this.comunicacion.actualizarPilaExperiencia(this.esperiencias);
    this.modal.open(ModalExperienciaComponent)
    /* .afterClosed().subscribe((data:Experiencia)=>{
      this.esperiencias.push(data)
    }); */
   
  }
}

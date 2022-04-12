import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEstudioComponent } from 'src/app/modales/modal-estudio/modal-estudio.component';
import { Estudio } from 'src/app/interfaces/estudio';
import { ComucacionService } from '../../services/comucacion.service';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public estudios:Estudio[]=[];
  constructor(private modal:MatDialog,private comunicacion:ComucacionService,
    private api:DanterestService) { }

  ngOnInit(): void {
    this.api.getEstudios().subscribe((data:Estudio[])=>{
      this.estudios=data;
    })
  }

  openEditMode(est:Estudio){
    this.comunicacion.actualizarEstudio(est);
    this.modal.open(ModalEstudioComponent)
  }
  openAgregarEstudio(){
    this.comunicacion.actualizarPilaEstudio(this.estudios)
    this.modal.open(ModalEstudioComponent)
  }
}

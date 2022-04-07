import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/interfaces/estudio';
import { ComucacionService } from '../../services/comucacion.service';


@Component({
  selector: 'app-modal-estudio',
  templateUrl: './modal-estudio.component.html',
  styleUrls: ['./modal-estudio.component.css'],
})

export class ModalEstudioComponent implements OnInit {
  public estudio:Estudio={id:null,titulo:"",acerca_de:"",institucion:"",fecha_fin:"",fecha_inicio:"",url_logo:"",persona_id:1}
  private estudios:Estudio[]=[];
  constructor(private comunicacion:ComucacionService) {}

  ngOnInit(): void {
    this.estudio=this.comunicacion.obtenerEstudio();
    this.estudios=this.comunicacion.obtenerPilaEstudio();
  }

  guardarCambios(){
    this.agregarNoRepetido();
  }
  private agregarNoRepetido(){
    if(!this.estudios.includes(this.estudio)){
      this.estudios.push(this.estudio)
    }
  }

}

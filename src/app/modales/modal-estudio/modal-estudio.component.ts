import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/interfaces/estudio';
import { DanterestService } from 'src/app/services/danterest.service';
import { ComucacionService } from '../../services/comucacion.service';


@Component({
  selector: 'app-modal-estudio',
  templateUrl: './modal-estudio.component.html',
  styleUrls: ['./modal-estudio.component.css'],
})

export class ModalEstudioComponent implements OnInit {
  public estudio:Estudio={id:null,titulo:"",acerca_de:"",institucion:"",fecha_fin:"",fecha_inicio:"",url_logo:""}
  private estudios:Estudio[]=[];
  constructor(private comunicacion:ComucacionService,private api:DanterestService) {}

  ngOnInit(): void {
    this.estudio=this.comunicacion.obtenerEstudio();
    this.estudios=this.comunicacion.obtenerPilaEstudio();
  }

  guardarCambios(){
    this.agregarNoRepetido();
  }
  private agregarNoRepetido(){
    console.log(this.estudio)
    if(!this.estudios.includes(this.estudio)){
      this.estudios.push(this.estudio)
    }
    this.api.updateEstudio(this.estudio);
  }

}

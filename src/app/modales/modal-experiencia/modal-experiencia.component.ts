import { IsFocusableConfig } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ComucacionService } from 'src/app/services/comucacion.service';
import { DanterestService } from 'src/app/services/danterest.service';
import { Experiencia } from '../../interfaces/experiencia';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  public experiencia:Experiencia={id:null,trabajo:"",url_imagen:"",nombre_empresa:"",acerca_trabajo:""}
  public stack:Experiencia[]=[];
  constructor(private comunicacion:ComucacionService,private api:DanterestService) { }

  ngOnInit(): void {
    this.stack=this.comunicacion.obtenerPilaExperiencia()
    this.experiencia=this.comunicacion.obtenerExperiencia();
  }
  guardarInformacion(){
    this.agregarNoRepetido()
  }
  private agregarNoRepetido(){

    if(!this.stack.includes(this.experiencia)){
      this.stack.push(this.experiencia)
    }
    this.api.updateExperiencia(this.experiencia);
  }

}

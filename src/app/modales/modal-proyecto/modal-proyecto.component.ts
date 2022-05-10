import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import { ComucacionService } from '../../services/comucacion.service';
import { DanterestService } from '../../services/danterest.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})


export class ModalProyectoComponent implements OnInit {

  public proyecto:Proyecto={id:null,titulo:"",subtitulo:"",acerca_proyecto:"",url_imagen:"",ir_sitio:""}
  private proyectos:Proyecto[]=[];
  

  constructor(private comunicacion:ComucacionService,private api:DanterestService) { }

  ngOnInit(): void {
    this.proyecto=this.comunicacion.obtenerProyecto();
    this.proyectos=this.comunicacion.obtenerPilaProyecto();
  }
  guardarInformacion(){
    this.agregarNoRepetido()
  }
  private agregarNoRepetido(){

    if(!this.proyectos.includes(this.proyecto)){
      this.proyectos.push(this.proyecto)
    }
    this.api.updateProyecto(this.proyecto);
  }

}

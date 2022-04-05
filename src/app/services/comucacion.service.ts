import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { Experiencia } from '../interfaces/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ComucacionService {
  private informacion_persona:Persona|any;
  private lista_experiencia:Experiencia[]|any;
  private experiencia:Experiencia={id:null,trabajo:"",url_imagen:"",nombre_empresa:"",
  persona_id:1,acerca_trabajo:""}
  constructor() { }

  agregarPersona( persona:Persona){
    this.informacion_persona=persona;
  }
  obtenerPersona():Persona{
    return this.informacion_persona;
  }
  actualizarPilaExperiencia(experiencias:Experiencia[]){
    this.lista_experiencia=experiencias;
  }
  obtenerPilaExperiencia(){
    return this.lista_experiencia;
  }
  actualizarExperiencia(experiencia:Experiencia){
    this.experiencia=experiencia;
  }
  obtenerExperiencia():Experiencia{
    let aux=this.experiencia;
    this.limpiarBuffer();
    return aux;
  
  }
  private limpiarBuffer(){
    this.experiencia={id:null,trabajo:"",url_imagen:"",nombre_empresa:"",
    persona_id:1,acerca_trabajo:""}
  }
}

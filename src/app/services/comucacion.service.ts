import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { Experiencia } from '../interfaces/experiencia';
import { Estudio } from '../interfaces/estudio';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class ComucacionService {
  private informacion_persona:Persona|any;
  private lista_experiencia:Experiencia[]|any;
  private estudios:Estudio[]=[];
  private skills:Skill[]=[];
  private experiencia:Experiencia={id:null,trabajo:"",url_imagen:"",nombre_empresa:"",
  persona_id:1,acerca_trabajo:""}
  public estudio:Estudio={id:null,titulo:"",persona_id:1,acerca_de:"",institucion:"",fecha_fin:"",fecha_inicio:"",
url_logo:""}
  private skill:Skill={
    id:null,nombre:"",porcentaje:0,persona_id:1
  }
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
  obtenerEstudio():Estudio{
    let aux=this.estudio;
    this.limpiarBuffer();
    return aux
  }
  actualizarEstudio(estudio:Estudio){
    this.estudio=estudio;
  }

  obtenerPilaEstudio():Estudio[]{
    return this.estudios;
  }
  actualizarPilaEstudio(estudio:Estudio[]){
    this.estudios=estudio;
  }

  actualizarSkill(sk:Skill){
    this.skill=sk;
  }
  obtenerSkill():Skill{
    let aux=this.skill
    this.limpiarBuffer();
    return aux;
  }
  actualizarPilaSkill(sks:Skill[]){
    this.skills =sks;
  }
  obtenerPilaSkill():Skill[]{
    return this.skills;
  }



  private limpiarBuffer(){
    this.experiencia={id:null,trabajo:"",url_imagen:"",nombre_empresa:"",
    persona_id:1,acerca_trabajo:""}

    this.estudio={id:null,persona_id:1,titulo:"",acerca_de:"",institucion:"",fecha_fin:"",fecha_inicio:"",
    url_logo:""}

    this.skill={id:null,persona_id:1,nombre:"",porcentaje:0}
  }
}

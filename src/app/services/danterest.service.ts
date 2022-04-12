import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Persona} from '../interfaces/persona';
import { Observable } from 'rxjs';
import { Experiencia } from '../interfaces/experiencia';
import { Estudio } from '../interfaces/estudio';
import { Skill } from '../interfaces/skill';
import { Foto } from '../interfaces/foto';
@Injectable({
  providedIn: 'root'
})
export class DanterestService {
  private url:string="http://localhost:8080/";
  constructor(private api:HttpClient) { }
  
  getUsuario():Observable<Persona>{
  return this.api.get<Persona>(this.url+'persona');
  }
  uptadeUsuario(persona:Persona){
  this.api.post(this.url+"agregarPersona",persona).subscribe()
  }
  updateEstudio(estudio:Estudio){
  this.api.post(this.url+"agregarEstudio",estudio).subscribe()
  }
  getEstudios():Observable<Estudio[]>{
   return this.api.get<Estudio[]>(this.url+'extraerEstudios');
  }
  updateSkill(skill:Skill){
    this.api.post(this.url+'agregarSkill',skill).subscribe();
  }
  getSkills():Observable<Skill[]>{
    return this.api.get<Skill[]>(this.url+'extraerSkills');
  }
  updateExperiencia(experiencia:Experiencia){
    this.api.post(this.url+'agregarExperiencia',experiencia).subscribe();
  }
  getExperiencias():Observable<Experiencia[]>{
    return this.api.get<Experiencia[]>(this.url+'extraerExperiencias')
  }
  getUrl_perfil():Observable<string>{
    return this.api.get<string>(this.url+'extraerFotoPerfil');
  }
  getUrl_banner(){
    return this.api.get<string>(this.url+'extraerFotoBanner')
  }
  updateFoto(foto:Foto){
    this.api.post(this.url+'updatearFoto',foto).subscribe()
  }
  getFoto():Observable<Foto>{
    return this.api.get<Foto>(this.url+'obtenerFoto');
  }
 

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Persona,Login} from '../interfaces/persona';
import { Observable } from 'rxjs';
import { Experiencia } from '../interfaces/experiencia';
import { Estudio } from '../interfaces/estudio';
import { Skill } from '../interfaces/skill';
import { Foto } from '../interfaces/foto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DanterestService {
  private url:string=environment.URL
  private token:string=""
  constructor(private api:HttpClient) { }

  getToken(){
    let tk = localStorage.getItem('token')
    if(tk!==null){
      this.token=tk;
    }
    return this.token;
  }
  
  getUsuario():Observable<Persona>{
  return this.api.get<Persona>(this.url+'info-persona');
  }
  uptadeUsuario(persona:Persona){
  this.api.post(this.url+"actualizarPersona",persona).subscribe(data =>this.decoder(data))
  }
 
  updateEstudio(estudio:Estudio){
  this.api.post(this.url+"agregarEstudio",estudio).subscribe(data =>this.decoder(data))
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
  //Login
  logearServicio(log:Login){
    console.log(log)
    console.log(this.url)
     this.api.post(this.url+"iniciarSesion",log).subscribe((data:any)=>{
      this.token=data.tokenDeAcceso
      localStorage.setItem('token',this.token);
      console.log(localStorage.getItem('token'))
     })
  }

  private decoder(data:any){
      /*  this.token=data.tokenDeAcceso
       localStorage.setItem('token',this.token);
       console.log(localStorage.getItem('token'))*/
  }
}

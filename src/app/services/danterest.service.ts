import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Persona} from '../interfaces/persona';
import { Observable } from 'rxjs';
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
}

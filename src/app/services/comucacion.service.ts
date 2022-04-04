import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class ComucacionService {
  private informacion_persona:Persona|any;
  constructor() { }

  agregarPersona( persona:Persona){
    this.informacion_persona=persona;
  }
  obtenerPersona():Persona{
    return this.informacion_persona;
  }
}

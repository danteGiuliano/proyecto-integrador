import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DanterestService {

  constructor(private api:HttpClient) { }

  getUsuario(){
    this.api.get('http://localhost:8080/persona').subscribe(resp =>{
      console.log(resp);
    });

  }
}

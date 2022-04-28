import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  public autorizado=false;
  private url=environment.URL


  constructor(private api:HttpClient) {
  }
  modoEdicion(){
    localStorage.setItem('sesion','true');
  }
  logout(){
    localStorage.clear()
    location.reload();
  }
  estaAutorizado(){
    async () => {
      this.checkToken()  
    }
     
    return this.autorizado
  }

  checkToken(){
    this.api.post(this.url+"tokenValido",localStorage.getItem('sesion')).subscribe(data=>{
      if(typeof(data)==='boolean'&& data){
        console.log(data)
        this.modoEdicion()
        this.autorizado=true;

      }else{
        localStorage.clear()
      }
   })
 }
}

import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpHandler,HttpRequest, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { DanterestService } from './danterest.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  private URL:string=environment.URL;
  constructor(private api:DanterestService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    if(this.validation(req)){
      var token=this.api.getToken();
      req=req.clone({
        setHeaders:{
          "authorization": 'Bearer '+token
        }
      })
    }
    return next.handle(req)
  }

  private validation(req:HttpRequest<any>){
    let cadena:string=this.URL+"iniciarSesion"
    return (req.method==='POST'&&req.url!==cadena)?true:false;
  }
}

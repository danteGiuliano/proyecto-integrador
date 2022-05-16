import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/persona';
import { DanterestService } from '../../services/danterest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public sesion:Login={usuarioOEmail:"",password:""}
  constructor(private api:DanterestService){}

  ngOnInit(): void {
  }
  logear(){
     this.api.logearServicio(this.sesion)  
  }


}

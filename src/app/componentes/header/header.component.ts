import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconsService } from 'src/app/services/icons.service';
import { LoginComponent } from '../login/login.component';
import { AutorizacionService } from '../../services/autorizacion.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public icon:IconsService, private login:MatDialog,private au:AutorizacionService) {
  }
  open(){
    this.login.open(LoginComponent);
  }
  ngOnInit(): void {
  }
  logout(){
    this.au.logout()
  }
  autorizado(){
    return this.au.estaAutorizado()
  }
  redirigir(url:string){
    window.open(url,"_blank")
  }

}

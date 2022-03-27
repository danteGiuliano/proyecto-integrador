import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconsService } from 'src/app/services/icons.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public icon:IconsService,private login:MatDialog) {
  }
  open(){
    this.login.open(LoginComponent);
  }
  ngOnInit(): void {
  }
  

}

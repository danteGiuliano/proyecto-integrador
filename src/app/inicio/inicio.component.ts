import { Component, OnInit,NgModule } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  constructor(private autenticacion:AutorizacionService) { 
    this.autenticacion.checkToken();
  }

  ngOnInit(): void {
  }

}

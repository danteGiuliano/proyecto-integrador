import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona';
import { ComucacionService } from 'src/app/services/comucacion.service';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-modal-biografia',
  templateUrl: './modal-biografia.component.html',
  styleUrls: ['./modal-biografia.component.css']
})
export class ModalBiografiaComponent implements OnInit {
  persona:Persona={id:1,nombre:"",apellido:"",especialidad:"",acerca_de:""}

  constructor(private comunicacion:ComucacionService,private api:DanterestService) {}

  ngOnInit(): void {
    this.persona=this.comunicacion.obtenerPersona();
  }

  actualizarInformacion(){
    this.api.uptadeUsuario(this.persona)
}
}
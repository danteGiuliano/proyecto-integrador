import { Component, OnInit } from '@angular/core';
import { ComucacionService } from '../../services/comucacion.service';

@Component({
  selector: 'app-modal-foto',
  templateUrl: './modal-foto.component.html',
  styleUrls: ['./modal-foto.component.css']
})
export class ModalFotoComponent implements OnInit {
  public url_foto:string="";
  
  constructor(private comunicacion:ComucacionService) { }

  ngOnInit(): void {  
    this.url_foto=this.comunicacion.obtenerUrlFoto();
  }

  actualizarInformacion(){
    this.comunicacion.actualizarUrlFoto(this.url_foto)
  }
}

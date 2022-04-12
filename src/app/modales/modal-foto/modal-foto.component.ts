import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/interfaces/foto';
import { DanterestService } from 'src/app/services/danterest.service';
import { ComucacionService } from '../../services/comucacion.service';

@Component({
  selector: 'app-modal-foto',
  templateUrl: './modal-foto.component.html',
  styleUrls: ['./modal-foto.component.css']
})
export class ModalFotoComponent implements OnInit {
  public url_foto:string="";
  private tipo:string="";
  private foto:Foto={id:null,url_banner:"",url_perfil:""}
  constructor(private comunicacion:ComucacionService,private api:DanterestService) { }

  ngOnInit(): void {
    this.url_foto=this.comunicacion.obtenerUrlFoto();
    this.tipo=this.comunicacion.obtenerSelector();
   console.log(this.tipo)
    this.api.getFoto().subscribe(data=>{
      this.foto=data;
    })
  }

  actualizarInformacion(){
    if(this.tipo==="perfil"){
      this.foto.url_perfil=this.url_foto;
    }else{
      this.foto.url_banner=this.url_foto;
    }
    this.api.updateFoto(this.foto)
  }
}

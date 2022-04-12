import { Component, OnInit } from '@angular/core';
import { ModalFotoComponent } from 'src/app/modales/modal-foto/modal-foto.component';
import { IconsService } from 'src/app/services/icons.service';
import { ComucacionService } from '../../services/comucacion.service';
import { MatDialog } from '@angular/material/dialog';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public url_foto:string="";
  constructor(private icons:IconsService,private comunicacion:ComucacionService,
    private modal:MatDialog,private api:DanterestService) { }

  ngOnInit(): void {
    this.api.getFoto().subscribe(data=>{
      this.url_foto=data.url_banner;
    })
  }
  openEditFoto(){
    this.comunicacion.actualizarUrlFoto("banner",this.url_foto)
    this.modal.open(ModalFotoComponent).afterClosed().subscribe(data=>{
      this.url_foto=data;
    })

}
}

import { Component, OnInit } from '@angular/core';
import { ComucacionService } from '../../services/comucacion.service';
import { DanterestService } from '../../services/danterest.service';
import { Experiencia } from '../../interfaces/experiencia';
import { Estudio } from '../../interfaces/estudio';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private comunicate: ComucacionService, private api: DanterestService) { }
  private component: any
  public list:any[]=[]

  ngOnInit(): void {
    let temp;
    temp = this.comunicate.getGeneric()
    if (temp) {
      this.list = temp[0]
      this.component = temp[1]
    }
  }

   delete() {
     this.deleteWithApi(this.component)
    return this.list.filter(item=>{return item.id!==this.component.id})
  }
  private deleteWithApi(comp:any){
    this.api.eliminarExpereriencia(comp)
    this.api.eliminarEstudio(comp)
    this.api.eliminarSkill(comp)
  }

}

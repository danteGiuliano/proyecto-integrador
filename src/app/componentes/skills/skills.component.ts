import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSkillComponent } from 'src/app/modales/modal-skill/modal-skill.component';
import { Skill } from 'src/app/interfaces/skill';
import { DanterestService } from 'src/app/services/danterest.service';
import { ComucacionService } from '../../services/comucacion.service';
import { EliminarComponent } from '../../modales/eliminar/eliminar.component';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills:Skill[]=[]
  constructor(private api:DanterestService,
    private au:AutorizacionService, private modal:MatDialog,private comunicacion:ComucacionService) { }

  ngOnInit(): void {
    this.api.getSkills().subscribe(data=>{
      this.skills=data;
    })
  }
  autorizado(){
    return this.au.estaAutorizado()
  }
  openEditMode(sk:Skill){
    this.comunicacion.actualizarSkill(sk)
    this.comunicacion.actualizarPilaSkill(this.skills)
    this.modal.open(ModalSkillComponent)
  }
  openAgregarSkill(){
    this.comunicacion.actualizarPilaSkill(this.skills)
    this.modal.open(ModalSkillComponent)
  }
  delete(sk:Skill){
    this.comunicacion.generic(this.skills,sk)
    this.modal.open(EliminarComponent).afterClosed().subscribe(data=>{
      this.skills=data;
    })
  }
}

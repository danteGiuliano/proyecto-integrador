import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSkillComponent } from 'src/app/modales/modal-skill/modal-skill.component';
import { Skill } from 'src/app/interfaces/skill';
import { DanterestService } from 'src/app/services/danterest.service';
import { ComucacionService } from '../../services/comucacion.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills:Skill[]=[]
  constructor(private api:DanterestService,private modal:MatDialog,private comunicacion:ComucacionService) { }

  ngOnInit(): void {
    this.api.getSkills().subscribe(data=>{
      this.skills=data;
    })
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
}

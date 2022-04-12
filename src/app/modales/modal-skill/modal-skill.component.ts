import { Component, OnInit } from '@angular/core';
import { DanterestService } from 'src/app/services/danterest.service';
import { Skill } from '../../interfaces/skill';
import { ComucacionService } from '../../services/comucacion.service';

@Component({
  selector: 'app-modal-skill',
  templateUrl: './modal-skill.component.html',
  styleUrls: ['./modal-skill.component.css']
})
export class ModalSkillComponent implements OnInit {
  public percent:number=0;
  public subtitle:string="Habilidad"
  public skill:Skill={id:null,persona_id:1,nombre:this.subtitle,porcentaje:this.percent}
  private skills:Skill[]=[]
  constructor(private comunicacion:ComucacionService,private api:DanterestService) { }
  
  ngOnInit(): void {
  this.skills=this.comunicacion.obtenerPilaSkill();
  this.skill=this.comunicacion.obtenerSkill();
  }

  guardarCambios(){
    if(!this.skills.includes(this.skill)){
      this.skills.push(this.skill)
    }
    this.api.updateSkill(this.skill)
  }
}

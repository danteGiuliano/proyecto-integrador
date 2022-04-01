import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSkillComponent } from 'src/app/component/modal-skill/modal-skill.component';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private service:DanterestService,private modal:MatDialog) { }

  ngOnInit(): void {
    this.service.getUsuario();
  }
  openEditMode(){
    this.modal.open(ModalSkillComponent)
  }
}

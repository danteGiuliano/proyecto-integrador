import { Component, OnInit } from '@angular/core';
import { DanterestService } from 'src/app/services/danterest.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private service:DanterestService) { }

  ngOnInit(): void {
    this.service.getUsuario();
  }

}

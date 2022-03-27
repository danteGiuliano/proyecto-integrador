import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalExperienciaComponent } from 'src/app/component/modal-experiencia/modal-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private modal:MatDialog) { }

  ngOnInit(): void {
  }

  openEditMode(){
    this.modal.open(ModalExperienciaComponent)
  }

}

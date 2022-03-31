import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEstudioComponent } from 'src/app/component/modal-estudio/modal-estudio.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private modal:MatDialog) { }

  ngOnInit(): void {
  }

  openEditMode(){
    this.modal.open(ModalEstudioComponent)
  }
}

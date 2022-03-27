import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaComponent } from './modal-experiencia.component';

describe('ModalExperienciaComponent', () => {
  let component: ModalExperienciaComponent;
  let fixture: ComponentFixture<ModalExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

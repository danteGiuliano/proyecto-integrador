import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstudioComponent } from './modal-estudio.component';

describe('ModalEstudioComponent', () => {
  let component: ModalEstudioComponent;
  let fixture: ComponentFixture<ModalEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

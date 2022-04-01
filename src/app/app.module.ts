import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './modulos/materialize/material.module';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { ModalExperienciaComponent } from './component/modal-experiencia/modal-experiencia.component';
import { ModalEstudioComponent } from './component/modal-estudio/modal-estudio.component';
import { ModalBiografiaComponent } from './component/modal-biografia/modal-biografia.component';
import { ModalSkillComponent } from './component/modal-skill/modal-skill.component';


@NgModule({
  declarations: [
    AppComponent,ModalEstudioComponent,
    HeaderComponent,InicioComponent, BannerComponent, AcercaDeComponent, ExperienciaComponent, EducacionComponent, SkillsComponent, LoginComponent, ModalExperienciaComponent, ModalBiografiaComponent, ModalSkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MaterializeModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,ModalEstudioComponent]
})
export class AppModule { }

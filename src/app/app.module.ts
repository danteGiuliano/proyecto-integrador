import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './modulos/materialize/materialize.module';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,InicioComponent, BannerComponent, AcercaDeComponent, ExperienciaComponent, EducacionComponent, SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MaterializeModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

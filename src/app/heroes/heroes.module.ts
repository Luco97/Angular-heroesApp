import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';

import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipePipe } from './pipes/imagen-pipe.pipe';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { HeroeEdicionComponent } from './components/heroe-edicion/heroe-edicion.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';




@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    EditarComponent,
    HeroeTarjetaComponent,
    ImagenPipePipe,
    BuscarComponent,
    HeroeEdicionComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }

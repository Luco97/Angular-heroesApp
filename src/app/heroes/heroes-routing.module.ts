import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'heroe/:id',
        component: HeroeComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

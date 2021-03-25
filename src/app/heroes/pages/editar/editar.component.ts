import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesServive: HeroesService, 
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(paramas => {
          this.heroesServive.getHeroe(paramas.id)
              .subscribe( heroe => {
                this.heroe = heroe
                //console.log(heroe);
              })
          //console.log(paramas)
        })
  }

  guardar() {
    if(this.heroe.superhero.trim().length == 0){
      return;
    }
    this.heroesServive.putHeroe(this.heroe)
        .subscribe( resp => {
          console.log("Respuesta", resp);
          this.mostrarSnackbar('Registro actualizado')
        })
  }
  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent,{
      data: {...this.heroe}
    });
    dialog.afterClosed()
          .subscribe(resp=> {
            if(resp == true){
                const nombre = this.heroe.superhero;
                this.heroesServive.DeleteHeroe(this.heroe.id! )
                    .subscribe( resp=>{
                            this.mostrarSnackbar('Heroe eliminado: ',nombre)
                            this.router.navigate(['heroes/listado'])
                    })
            }
          })

  //  const nombre = this.heroe.superhero;
  //  this.heroesServive.DeleteHeroe(this.heroe.id! )
  //      .subscribe( resp=>{
  //        this.mostrarSnackbar('Heroe eliminado: ',nombre)
  //        this.router.navigate(['heroes/listado'])
  //      })
        
  }
  mostrarSnackbar(mensaje: string, nombre: string = ''){
    if(nombre == ''){
      this.snackBar.open(mensaje, 'Ok!',{
        duration:3500
      });
    }
    else {
      this.snackBar.open(mensaje + nombre, 'Ok!',{
        duration:3500
      });
    }
  }

}

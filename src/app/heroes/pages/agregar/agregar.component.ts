import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroesService: HeroesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  guardar() {
    if(this.heroe.superhero.trim().length == 0){
      return;
    }
    console.log(this.heroe);

    this.heroesService.postHeroe(this.heroe)
        .subscribe( resp => {
          console.log("Respuesta", resp);
          this.mostrarSnackbar()
          
        })
  }
  mostrarSnackbar(){
    this.snackBar.open('Registro creado', 'Ok!',{
      duration:3500
    });
  }
}

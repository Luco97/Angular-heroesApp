import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

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

  constructor(private activatedRoute: ActivatedRoute, private heroesServive: HeroesService) { }

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
        })
  }
  borrar() {
    this.heroesServive.DeleteHeroe(this.heroe.id! )
        .subscribe()
  }

}

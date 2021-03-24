import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  sugerencias() {

    this.heroesService.getSugerencias(this.termino)
        .subscribe(heroes =>{
          this.heroes = heroes;
    })

  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      console.log("No existe la wea");
      return;
    }
    const heroe: Heroe = event.option.value;
    //console.log(heroe);COMO NO EXISTE, SE MANDA COMO ALTERNATIVA value , POR ESA RAZON SE MANDA UN STRING VACIO Y POR ENDE LA VALIDACION
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
        .subscribe(heroe => {
          this.heroeSeleccionado = heroe;
        })
  }

}

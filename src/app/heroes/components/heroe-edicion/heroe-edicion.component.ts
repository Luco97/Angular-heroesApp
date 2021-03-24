import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-heroe-edicion',
  templateUrl: './heroe-edicion.component.html',
  styleUrls: ['./heroe-edicion.component.css']
})
export class HeroeEdicionComponent implements OnInit {

  @Input('InputHeroe') heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

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

  constructor() { }

  ngOnInit(): void {
  }

}

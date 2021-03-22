import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  Heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    
  
    this.heroesService.getHeroes()
                      .subscribe( heroes => {
                        this.Heroes = heroes;
                        console.log(this.Heroes);
                      }
                      , err => {
                        this.Heroes = [];
                      })

                      
  }

}

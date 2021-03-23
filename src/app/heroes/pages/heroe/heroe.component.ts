import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesServive: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( paramas => {
          //console.log(paramas);
          this.heroesServive.getHeroe(paramas.id)
                            .subscribe(heroe => {
                              //console.log(heroe);
                              this.heroe = heroe;
                            })
        })
  }

}

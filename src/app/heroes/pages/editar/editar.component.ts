import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private heroesServive: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(paramas => {
          console.log(paramas)
        })
  }

}

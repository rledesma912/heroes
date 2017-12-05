import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { srvHeroes } from '../../servicios/heroes.service';

@Component({

  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private ar: ActivatedRoute,
              private srvHeroes:srvHeroes ) {

    this.ar.params.subscribe( params => {
      this.heroe = srvHeroes.getHeroeById(params['id']);
      //console.log(this.heroe);
    })
  }


}

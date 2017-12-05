import { Component, OnInit } from '@angular/core';
import { srvHeroes, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]= [];

  constructor( private _servicioHeroes:srvHeroes,
               private _router:Router ){

}

  ngOnInit(){
    this.heroes = this._servicioHeroes.getHeroes();
  }

  verHeroe(idx:number){
    //console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { srvHeroes } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = [];

  constructor(private ar: ActivatedRoute,
              private srv:srvHeroes ) {


  }

  ngOnInit() {
    this.ar.params.subscribe( params => {
      this.heroes = this.srv.getHeroesPorTexto(params['texto']);
    })
  }

}

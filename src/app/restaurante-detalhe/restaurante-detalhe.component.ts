import { Component, OnInit } from '@angular/core';

import { RestaurantesService } from './../restaurantes/restaurantes.service';
import { Restaurante } from '../restaurantes/restaurante/restaurante.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  //criação de propriedade
  restaurante: Restaurante

  //injetando/instanciando serviço
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) { }

  //método de inicialização do componente
  ngOnInit() {
    //obtendo valor do parâmetro pelo id
    this.restaurantesService.restauranteById(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante);
  }

}

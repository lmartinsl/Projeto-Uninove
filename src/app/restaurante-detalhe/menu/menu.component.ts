import { Component, OnInit } from '@angular/core';

import { RestaurantesService } from './../../restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MenuItem } from './../item-menu/menu-item.module';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantesService
      .menuRestaurante(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Restaurante } from './restaurante.module';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, 100px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  restaurantState = 'ready'

  @Input() restaurante: Restaurante

  constructor() { }

  ngOnInit() {
  }

}

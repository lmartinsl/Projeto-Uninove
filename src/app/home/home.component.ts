import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('homeAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, 100px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  homeState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}

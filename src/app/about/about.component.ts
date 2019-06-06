import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('aboutAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, 100px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  aboutState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}

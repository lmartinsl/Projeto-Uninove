import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.module';

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html'
})
export class ItemMenuComponent implements OnInit {

  //sempre que exitir uma propriedade que o componente vai informar, é necessário marcar com um @input()
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    //Componente parent associa ação
    this.add.emit(this.menuItem);
  }

}

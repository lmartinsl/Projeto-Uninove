import { Component, OnInit } from '@angular/core';
import { CarrinhoCompraService } from './carrinho-compra.service';

@Component({
  selector: 'mt-carrinho-compra',
  templateUrl: './carrinho-compra.component.html'
})
export class CarrinhoCompraComponent implements OnInit {

  constructor(private carrinhoCompraService: CarrinhoCompraService) { }

  ngOnInit() {
  }

  itens(): any {
    return this.carrinhoCompraService.itens;
  }

  clear() {
    this.carrinhoCompraService.clear()
  }

  removeItem(item: any) {
    return this.carrinhoCompraService.removeItem(item)
  }

  addItem(item: any) {
    return this.carrinhoCompraService.addItem(item)
  }

  total(): number {
    return this.carrinhoCompraService.total();
  }

}

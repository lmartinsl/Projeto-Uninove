import { Injectable } from "@angular/core";
import { CarrinhoCompraService } from './../restaurante-detalhe/carrinho-compra/carrinho-compra.service';
import { CarItem } from './../restaurante-detalhe/carrinho-compra/carrinho-item.model';
import { Observable } from "rxjs";
import { Order, OrderItem } from "./order.model";
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from "../app.api";

import 'rxjs/add/operator/map'

@Injectable()

export class OrderService {

    constructor(private cartService: CarrinhoCompraService, private http: Http) { }

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CarItem[] {
        return this.cartService.itens
    }

    increaseQty(item: CarItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CarItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CarItem) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id)
    }

}
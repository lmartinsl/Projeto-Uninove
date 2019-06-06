import { CarItem } from './carrinho-item.model';
import { MenuItem } from './../item-menu/menu-item.module';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { NotificationService } from './../../shared/messages/notification.service';

@Injectable()

export class CarrinhoCompraService {

    itens: CarItem[] = []

    constructor(private notificationService: NotificationService) { }

    clear() {
        this.itens = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.itens.push(new CarItem(item))
        }
        this.notificationService.notify(`Você adicionou o item '${item.name}'`)
    }

    increaseQty(item: CarItem) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CarItem) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: any) {
        //informando o índice que deseja-se iniciar e a quantidade á ser removida
        this.itens.splice(this.itens.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item '${item.menuItem.name}'`)
    }

    total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }


}
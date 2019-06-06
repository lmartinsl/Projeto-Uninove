import { MenuItem } from './../item-menu/menu-item.module';

export class CarItem {
    constructor(
        public menuItem: MenuItem,
        public quantity: number = 1) { }

    value(): number {
        return this.menuItem.price * this.quantity
    }

}
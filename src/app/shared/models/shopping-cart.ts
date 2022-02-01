import { Product } from './product.model';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  itemsArray: ShoppingCartItem[] = [];

  constructor(public items: { [key: string]: ShoppingCartItem }) {
    this.items = items || {};
    for (let productId in items) {
      let item = items[productId];

      this.itemsArray.push(new ShoppingCartItem({ ...item, key: productId }));
    }
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count;
  }

  get totalPrice() {
    let sum = 0;
    for (let item of this.itemsArray) sum += item.totalPrice;
    return sum;
  }

  getQuantity(product: Product) {
    let item = this.items[product.key];
    return item ? item.quantity : 0;
  }
}

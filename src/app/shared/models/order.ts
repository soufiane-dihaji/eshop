import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];

  constructor(
    public userId: string | undefined,
    public shipping: any,
    shoppingCart: ShoppingCart
  ) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.itemsArray.map((i) => ({
      product: {
        title: i.title,
        imageUrl: i.imageUrl,
        price: i.price,
      },
      quantity: i.quantity,
      totalPrice: i.totalPrice,
    }));
  }
}

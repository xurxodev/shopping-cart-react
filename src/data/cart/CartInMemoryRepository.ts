import Cart from "../../domain/cart/Cart";
import CartRepository from "../../domain/cart/CartRepository";

export default class CartInMemoryRepository implements CartRepository {

  cart = new Cart([
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/I/81oKhu2bsgL._AC_UL640_FMwebp_QL65_.jpg",
      title: "Element Blazin LS tee Shirt, Hombre",
      price: 19.95,
      quantity: 3
    },
    {
      id: "2",
      image:
        "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
      title: "Element Vertical SS tee Shirt, Hombre",
      price: 21.95,
      quantity: 1
    }
  ]);


  get(): Promise<Cart> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.cart);
      }, 100);
    });
  }

  save(cart: Cart): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.cart = cart;
        resolve(true);
      }, 100);
    });
  }
}
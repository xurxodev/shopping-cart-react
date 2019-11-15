import Cart from "../../domain/cart/Cart";
import CartRepository from "../../domain/cart/CartRepository";

const initialCart = new Cart( [
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      image:
        "https://m.media-amazon.com/images/I/81oKhu2bsgL._AC_UL640_FMwebp_QL65_.jpg",
      title: "Element Blazin LS tee Shirt, Hombre",
      price: 19.95,
      quantity: 3
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      image:
        "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
      title: "Element Vertical SS tee Shirt, Hombre",
      price: 21.95,
      quantity: 1
    }
  ]);

export default class CartInMemoryRepository implements CartRepository {
    get(): Promise<Cart> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(initialCart);
            }, 100);
        });
    }
}
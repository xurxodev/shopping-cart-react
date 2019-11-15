import Cart from "../../domain/cart/Cart";

export default interface CartState {
    open: boolean;
    cart: Cart;
}
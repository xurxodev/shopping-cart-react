import GetCartUseCase from "../../domain/cart/GetCartUseCase";
import CartState from "./CartState";
import Cart from "../../domain/cart/Cart";
import CartItem from "../../domain/cart/CartItem";

export type OnCartChangeHandler = (cartState: CartState) => void;

export class CartPresenter {
    getCartUseCase: GetCartUseCase;
    onCartChangeHandler: OnCartChangeHandler | undefined = undefined;

    cartState = {
        open: false,
        cart: Cart.createEmpty()
    };

    constructor(getCartUseCase: GetCartUseCase) {
        this.getCartUseCase = getCartUseCase;
    }

    init(onCartChangeHandler: OnCartChangeHandler) {
        this.onCartChangeHandler = onCartChangeHandler;
        this.loadCart();
    }

    closeCart() {
        this.cartState = { ...this.cartState, open: false }

        this.render(this.cartState);
    }

    openCart() {
        this.cartState = { ...this.cartState, open: true }

        this.render(this.cartState);
    }

    removeCartItem(item: CartItem) {
        this.cartState = { ...this.cartState, cart: this.cartState.cart.removeItem(item) }

        this.render(this.cartState);
    }

    editQuantityCartItem(item: CartItem, quantity: number) {
        this.cartState = { ...this.cartState, cart: this.cartState.cart.editItem(item, quantity) }

        this.render(this.cartState);
    }

    private loadCart() {
        this.getCartUseCase.execute()
        .then(cart => {
            this.cartState = { ...this.cartState, cart: cart}

            this.render(this.cartState);
        }).catch (_error => {
            this.cartState = { ...this.cartState, cart: Cart.createEmpty()}

            this.render(this.cartState);
        });
    }

    private render(cartState: CartState) {
        if (this.onCartChangeHandler) {
            this.onCartChangeHandler(cartState);
        }
    }
}
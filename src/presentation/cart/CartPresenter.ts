import GetCartUseCase from "../../domain/cart/usecases/GetCartUseCase";
import CartState from "./CartState";
import Cart from "../../domain/cart/Cart";
import CartItem from "../../domain/cart/CartItem";
import AddProductToCartUseCase from "../../domain/cart/usecases/AddProductToCartUseCase";
import Product from "../../domain/products/Product";
import RemoveItemFromCartUseCase from "../../domain/cart/usecases/RemoveItemFromCartUseCase";
import EditQuantityOfCartItemUseCase from "../../domain/cart/usecases/EditQuantityOfCartItemUseCase";

export type OnCartChangeHandler = (cartState: CartState) => void;

export class CartPresenter {
    getCartUseCase: GetCartUseCase;
    addProductToCartUseCase: AddProductToCartUseCase;
    removeItemFromCartUseCase: RemoveItemFromCartUseCase;
    editQuantityOfCartItemUseCase: EditQuantityOfCartItemUseCase;

    onCartChangeHandler: OnCartChangeHandler | undefined = undefined;

    cartState = {
        open: false,
        cart: Cart.createEmpty()
    };

    constructor(
        getCartUseCase: GetCartUseCase,
        addProductToCartUseCase: AddProductToCartUseCase,
        removeItemFromCartUseCase: RemoveItemFromCartUseCase,
        editQuantityOfCartItemUseCase: EditQuantityOfCartItemUseCase) {

        this.getCartUseCase = getCartUseCase;
        this.addProductToCartUseCase = addProductToCartUseCase;
        this.removeItemFromCartUseCase = removeItemFromCartUseCase;
        this.editQuantityOfCartItemUseCase = editQuantityOfCartItemUseCase;
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
        this.removeItemFromCartUseCase.execute(item)
            .then(cart => {
                this.cartState = { ...this.cartState, cart: cart }

                this.render(this.cartState);
            })
    }

    editQuantityCartItem(item: CartItem, quantity: number) {
        this.editQuantityOfCartItemUseCase.execute(item, quantity)
            .then(cart => {
                this.cartState = { ...this.cartState, cart: cart }

                this.render(this.cartState);
            })
    }

    addProductToCart(product: Product) {
        this.addProductToCartUseCase.execute(product)
            .then(cart => {
                this.cartState = { ...this.cartState, cart: cart }

                this.render(this.cartState);
            })
    }

    private loadCart() {
        this.getCartUseCase.execute()
            .then(cart => {
                this.cartState = { ...this.cartState, cart: cart }

                this.render(this.cartState);
            }).catch(_error => {
                this.cartState = { ...this.cartState, cart: Cart.createEmpty() }

                this.render(this.cartState);
            });
    }

    private render(cartState: CartState) {
        if (this.onCartChangeHandler) {
            this.onCartChangeHandler(cartState);
        }
    }
}
import CartRepository from "../CartRepository";
import Cart from "../Cart";
import CartItem from "../CartItem";

export default class RemoveItemFromCartUseCase {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(cartItem: CartItem): Promise<Cart> {
        const cart = await this.cartRepository.get();

        const editedCart = cart.removeItem(cartItem);

        await this.cartRepository.save(editedCart);

        return editedCart;
    }
}

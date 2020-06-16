import GetProductsUseCase from "../domain/products/GetProductsUseCase";
import ProductInMemoryRepository from "../data/products/ProductInMemoryRepository";
import { ProductsBloc } from "../presentation/products/ProductsBloc";
import GetCartUseCase from "../domain/cart/usecases/GetCartUseCase";
import CartInMemoryRepository from "../data/cart/CartInMemoryRepository";
import { CartBloc } from "../presentation/cart/CartBloc";
import AddProductToCartUseCase from "../domain/cart/usecases/AddProductToCartUseCase";
import RemoveItemFromCartUseCase from "../domain/cart/usecases/RemoveItemFromCartUseCase";
import EditQuantityOfCartItemUseCase from "../domain/cart/usecases/EditQuantityOfCartItemUseCase";

export function provideProductsBloc(): ProductsBloc {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPresenter = new ProductsBloc(getProductsUseCase);

    return productsPresenter;
}

export function provideCartBloc(): CartBloc {
    const cartRepository = new CartInMemoryRepository();
    const getCartUseCase = new GetCartUseCase(cartRepository);
    const addProductToCartUseCase = new AddProductToCartUseCase(cartRepository);
    const removeItemFromCartUseCase = new RemoveItemFromCartUseCase(cartRepository);
    const editQuantityOfCartItemUseCase = new EditQuantityOfCartItemUseCase(cartRepository);
    const cartPresenter = new CartBloc(
        getCartUseCase,
        addProductToCartUseCase,
        removeItemFromCartUseCase,
        editQuantityOfCartItemUseCase);

    return cartPresenter;
}
import GetProductsUseCase from "../domain/products/GetProductsUseCase";
import ProductInMemoryRepository from "../data/products/ProductInMemoryRepository";
import { ProductsPresenter } from "../presentation/products/ProductsPresenter";
import GetCartUseCase from "../domain/cart/GetCartUseCase";
import CartInMemoryRepository from "../data/cart/CartInMemoryRepository";
import { CartPresenter } from "../presentation/cart/CartPresenter";

export function provideProductsPresenter(): ProductsPresenter {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPresenter = new ProductsPresenter(getProductsUseCase);

    return productsPresenter;
}

export function provideCartPresenter(): CartPresenter {
    const cartRepository = new CartInMemoryRepository();
    const getCartUseCase = new GetCartUseCase(cartRepository);
    const cartPresenter = new CartPresenter(getCartUseCase);

    return cartPresenter;
}
import GetProductsUseCase from "../domain/products/GetProductsUseCase";
import ProductInMemoryRepository from "../data/products/ProductInMemoryRepository";
import { ProductsPresenter } from "../presentation/products/ProductsPresenter";

export function provideProductsPresenter(): ProductsPresenter {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPresenter = new ProductsPresenter(getProductsUseCase);

    return productsPresenter;
}
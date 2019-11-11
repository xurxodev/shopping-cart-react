import GetProductsUseCase from "../domain/products/GetProductsUseCase";
import ProductInMemoryRepository from "../data/products/ProductInMemoryRepository";

export function provideGetProductUseCase(): GetProductsUseCase {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);

    return getProductsUseCase;
}
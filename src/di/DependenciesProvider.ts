import GetProductsUseCase from "../core/domain/GetProductsUseCase";
import ProductInMemoryRepository from "../core/data/ProductInMemoryRepository";

export function provideGetProductUseCase(): GetProductsUseCase {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);

    return getProductsUseCase;
}
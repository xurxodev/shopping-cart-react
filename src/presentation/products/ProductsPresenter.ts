import GetProductsUseCase from "../../domain/products/GetProductsUseCase";
import ProductsState from "./ProductsState";

export interface ProductsView {
    render(productsState: ProductsState): void;
}

export type OnSearchHandler = (productsState: ProductsState) => void;

export class ProductsPresenter {
    getProductsUseCase: GetProductsUseCase;
    onSearchHandler: OnSearchHandler | undefined = undefined;

    constructor(getProductsUseCase: GetProductsUseCase) {
        this.getProductsUseCase = getProductsUseCase;
    }

    init(onSearchHandler: OnSearchHandler) {
        this.onSearchHandler = onSearchHandler;
    }

    search(filter: string) {
        this.render({
            loading: true,
            error: "",
            products: []
        })

        this.getProductsUseCase.execute(filter)
            .then(products => this.render({
                loading: false,
                error: "",
                products: products
            }))
            .catch(error => this.render({
                loading: false,
                error: "An error has ocurred loading the products, please try later",
                products: []
            }));
    }

    private render(productsState: ProductsState) {
        if (this.onSearchHandler) {
            this.onSearchHandler(productsState);
        }
    }
}
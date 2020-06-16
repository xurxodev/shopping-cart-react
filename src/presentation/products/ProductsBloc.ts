import GetProductsUseCase from "../../domain/products/GetProductsUseCase";
import { Bloc } from "../common/bloc";
import { ProductsState, productsInitialState } from "./ProductsState";

export class ProductsBloc extends Bloc<ProductsState> {
    constructor(private getProductsUseCase: GetProductsUseCase) {
        super(productsInitialState)
    }

    search(filter: string) {
        this.getProductsUseCase.execute(filter)
            .then(products => this.changeState({
                kind: "LoadedProductsState",
                products: products,
                searchTerm: this.state.searchTerm
            }))
            .catch(error => this.changeState({
                kind: "ErrorProductsState",
                error: "An error has ocurred loading products",
                searchTerm: this.state.searchTerm
            }));
    }
}
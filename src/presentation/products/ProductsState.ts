import Product from "../../domain/products/Product";

export default interface ProductsState {
    loading: boolean;
    error: string;
    products: Array<Product>;
}
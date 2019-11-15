import Cart from "./Cart";

export default interface CartRepository {
    get():Promise<Cart> ;
}
import React from "react";
import MyAppBar from "../appbar/MyAppBar";
import ProductList from "../products/components/ProductList";
import CartDrawer from "../cart/components/CartDrawer";
import * as DependenciesProvider from "../../di/DependenciesProvider";
import Cart from "../../domain/cart/Cart";
import CartItem from "../../domain/cart/CartItem";
import CartState from "../cart/CartState";
import { CartPresenter } from "../cart/CartPresenter";
import Product from "../../domain/products/Product";

interface AppProps {
  cartPresenter: CartPresenter;
}

const App: React.FC <AppProps>= ({cartPresenter}) => {
  const [cartState, setCartState] = React.useState<CartState>({
    open: false,
    cart: Cart.createEmpty()
  });

  React.useEffect(() => {
    cartPresenter.init(onCartChangeHandler);
  }, [cartPresenter]);

  const onCartChangeHandler = (cartState: CartState) => setCartState(cartState);

  const handleRemoveCartItem = (item: CartItem) => {
    cartPresenter.removeCartItem(item);
  };

  const handleEditQuantityCartItem = (item: CartItem, quantity: number) => {
    cartPresenter.editQuantityCartItem(item, quantity);
  };

  const handleAddProductToCart = (product: Product) => {
    cartPresenter.addProductToCart(product);
  };

  const handleDrawerOpen = () => {
    cartPresenter.openCart();
  };

  const handleDrawerClose = () => {
    cartPresenter.closeCart();
  };

  const productsPresenter = DependenciesProvider.provideProductsPresenter();

  return (
    <div>
      <MyAppBar
        onShoppingCartHandler={handleDrawerOpen}
        totalCartItems={cartState.cart.totalItems}
      />
      <ProductList productsPresenter={productsPresenter} onAddProductToCart={handleAddProductToCart}/>
      <CartDrawer
        cart={cartState.cart}
        open={cartState.open}
        onClose={handleDrawerClose}
        onRemoveCartItem={handleRemoveCartItem}
        onEditQuantityCartItem={handleEditQuantityCartItem}
      />
    </div>
  );
};

export default App;

import React from "react";
import MyAppBar from "../appbar/MyAppBar";
import ProductList from "../products/components/ProductList";
import ShoppingCartDrawer from "../shoppingcart/components/ShoppingCartDrawer";
import * as DependenciesProvider from "../../di/DependenciesProvider";
import ShoppingCart from "../../domain/shoppingcart/ShoppingCart";
import ShoppingCartItem from "../../domain/shoppingcart/ShoppingCartItem";

const cartItems = [
  {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    image:
      "https://m.media-amazon.com/images/I/81oKhu2bsgL._AC_UL640_FMwebp_QL65_.jpg",
    title: "Element Blazin LS tee Shirt, Hombre",
    price: 19.95,
    quantity: 1
  },
  {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    image:
      "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
    title: "Element Vertical SS tee Shirt, Hombre",
    price: 21.95,
    quantity: 1
  }
];

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = React.useState(new ShoppingCart(cartItems));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRemoveCartItem = (item: ShoppingCartItem) => {
    setCart(cart.removeItem(item));
  };

  const handleEditQuantityCartItem = (
    item: ShoppingCartItem,
    quantity: number
  ) => {
    setCart(cart.editItem(item, quantity));
  };

  const productsPresenter = DependenciesProvider.provideProductsPresenter();

  return (
    <div>
      <MyAppBar onShoppingCartHandler={handleDrawerOpen} totalCartItems={cart.totalItems} />
      <ProductList productsPresenter={productsPresenter} />
      <ShoppingCartDrawer
        cart={cart}
        open={open}
        onClose={handleDrawerClose}
        onRemoveCartItem={handleRemoveCartItem}
        onEditQuantityCartItem={handleEditQuantityCartItem}
      />
    </div>
  );
};

export default App;

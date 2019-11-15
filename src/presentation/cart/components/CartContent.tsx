import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { List, Divider, Box, Typography } from "@material-ui/core";
import Cart from "../../../domain/cart/Cart";
import CartContentItem from "./CartContentItem";
import CartItem from "../../../domain/cart/CartItem";

const useStyles = makeStyles((theme: Theme) => ({
  totalPriceContainer: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),
    justifyContent: "space-around"
  },
  itemsContainer: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),
    justifyContent: "space-around",
    minHeight: 150,
    maxHeight: 600
  }
}));

interface CartProps {
  cart: Cart;
  onRemoveCartItem: (item: CartItem) => void;
  onEditQuantityCartItem: (item: CartItem, quantity: number) => void;
}

const CartContent: React.FC<CartProps> = ({
  cart,
  onRemoveCartItem,
  onEditQuantityCartItem
}) => {
  const classes = useStyles();

  const cartItems = () => (
    <List>
      {cart.items.map((item, index) => (
        <CartContentItem
          key={index}
          cartItem={item}
          onRemoveCartItem={onRemoveCartItem}
          onEditQuantityCartItem={onEditQuantityCartItem}
        />
      ))}
    </List>
  );

  const emptyCartItems = () => (
    <React.Fragment>
      <Typography variant="h6" component="h2">
        Empty Cart :(
      </Typography>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Box flexDirection="column" className={classes.itemsContainer}>
        {cart.items.length > 0 ? cartItems() : emptyCartItems()}
      </Box>
      <Divider/>
      <Box flexDirection="row" className={classes.totalPriceContainer}>
        <Typography variant="h6" component="h2">
          Total Price
        </Typography>
        <Typography variant="h6" component="h2">
          {`${cart.totalPrice.toLocaleString("es-ES")} €`}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default CartContent;

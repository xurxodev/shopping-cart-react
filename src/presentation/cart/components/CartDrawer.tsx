import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  Divider,
  Typography,
  Box
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartContent from "./CartContent";
import Cart from "../../../domain/cart/Cart";
import CartItem from "../../../domain/cart/CartItem";

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),
    justifyContent: "flex-start"
  },
  drawerTitleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerTitleIcon: {
    marginRight: theme.spacing(1)
  }
}));

interface CartDrawerProps {
  cart: Cart;
  open: boolean;
  onClose: () => void;
  onRemoveCartItem: (item: CartItem) => void;
  onEditQuantityCartItem: (item: CartItem, quantity: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  cart,
  open,
  onClose,
  onRemoveCartItem,
  onEditQuantityCartItem
}) => {
  const classes = useStyles();

  //onClose={toggleDrawer("right", false)}
  return (
    <Drawer
      anchor="right"
      open={open}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Box className={classes.drawerTitleContainer}>
          <ShoppingCartIcon className={classes.drawerTitleIcon} />
          <Typography variant="h6" component="h2">
            Cart
          </Typography>
        </Box>
      </Box>
      <Divider />
      <CartContent
        cart={cart}
        onRemoveCartItem={onRemoveCartItem}
        onEditQuantityCartItem={onEditQuantityCartItem}
      />
    </Drawer>
  );
};

export default CartDrawer;

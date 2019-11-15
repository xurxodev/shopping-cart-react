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
import ShoppingCartContent from "./ShoppingCartContent";
import ShoppingCart from "../../../domain/shoppingcart/ShoppingCart";
import ShoppingCartItem from "../../../domain/shoppingcart/ShoppingCartItem";

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

interface ShoppingCartProps {
  cart: ShoppingCart;
  open: boolean;
  onClose: () => void;
  onRemoveCartItem: (item: ShoppingCartItem) => void;
  onEditQuantityCartItem: (item: ShoppingCartItem, quantity: number) => void;
}

const ShoppingCartDrawer: React.FC<ShoppingCartProps> = ({
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
      <ShoppingCartContent
        cart={cart}
        onRemoveCartItem={onRemoveCartItem}
        onEditQuantityCartItem={onEditQuantityCartItem}
      />
    </Drawer>
  );
};

export default ShoppingCartDrawer;

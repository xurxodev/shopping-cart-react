import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./Logo.png";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    justifyContent: "space-between",
    maxWidth: "800"
  }
}));

interface AppProps {
  onShoppingCartHandler: ()=> void;
}

const MyAppBar: React.FC<AppProps> = ({onShoppingCartHandler}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <img src={logo} width={150} alt="logo" />
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon onClick={onShoppingCartHandler} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;

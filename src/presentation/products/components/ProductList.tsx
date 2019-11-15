import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Grid,
  Container,
  Box,
  Typography
} from "@material-ui/core";
import ProductItem from "./ProductItem";
import { ProductsPresenter } from "../ProductsPresenter";
import ProductsState from "../ProductsState";

const useStyles = makeStyles(theme => ({
  titleContainer: {
    marginBottom: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }
}));

interface AppProps {
  productsPresenter: ProductsPresenter;
}

const ProductList: React.FC<AppProps> = ({ productsPresenter }) => {
  const [state, setState] = React.useState<ProductsState>({
    loading: false,
    error: "",
    products: []
  });

  React.useEffect(() => {
    const searchProducts = async (filter: string) => {
      productsPresenter.search(filter);
    };

    productsPresenter.init(onSearchComplete);

    searchProducts("Element");
  }, [productsPresenter]);

  const onSearchComplete = (state: ProductsState) => setState(state);

  const classes = useStyles();

  if (state.loading) {
    return (
      <div className={classes.infoContainer}>
        <CircularProgress />
      </div>
    );
  } else if (state.error) {
    return (
      <div className={classes.infoContainer}>
        <Typography display="inline" variant="h5" component="h2">
          {state.error}
        </Typography>
      </div>
    );
  } else {
    return (
      <Container className={classes.cardGrid} maxWidth="xl">
        <Box className={classes.titleContainer}>
          <Typography display="inline" variant="h6" component="h2">
            Resultados para{" "}
          </Typography>
          <Typography
            color="primary"
            display="inline"
            variant="h6"
            component="h2"
          >
            "Element"
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {state.products.map((product,index) => (
            <ProductItem product={product} key={index}/>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default ProductList;

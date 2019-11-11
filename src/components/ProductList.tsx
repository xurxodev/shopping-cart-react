import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import GetProductsUseCase from "../core/domain/GetProductsUseCase";
import Product from "../core/domain/Product";
import ProductItem from "./ProductItem";

const useStyles = makeStyles(theme => ({
  titleContainer: {
    marginBottom: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

interface AppProps {
  getProductsUseCase: GetProductsUseCase;
}

const ProductList: React.FC<AppProps> = ({ getProductsUseCase }) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const retrieveProducts = async () => {
      const products = await getProductsUseCase.execute("Element");
      setProducts(products);
    };

    retrieveProducts();
  }, [getProductsUseCase]);

  const classes = useStyles();

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
        {products.map(product => (
          <ProductItem product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;

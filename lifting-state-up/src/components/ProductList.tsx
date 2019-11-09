import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@material-ui/core";
import GetProductsUseCase from "../core/domain/GetProductsUseCase";
import Product from "../core/domain/Product";

//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  titleContainer: {
    marginBottom: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    backgroundSize: "auto 100%",
    paddingTop: "100%", // 16:9,
    margin: theme.spacing(1)
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    justifyContent: "center"
  },
  productTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 50
  },
  productPrice: {
    textAlign: "center"
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
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={product.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.productTitle}
                  gutterBottom
                  variant="subtitle1"
                >
                  {product.title}
                </Typography>
                <Typography variant="h6" className={classes.productPrice}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;

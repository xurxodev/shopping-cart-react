import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress, Grid, Container, Box, Typography} from "@material-ui/core";
import ProductItem from "./ProductItem";
import * as DependenciesProvider from "../../../di/DependenciesProvider";
import {BlocBuilder} from "../../common/bloc";
import {ProductsState} from "../ProductsState";

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        marginBottom: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    infoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
}));

const ProductList: React.FC = () => {
    const bloc = DependenciesProvider.provideProductsBloc();
    const classes = useStyles();

    React.useEffect(() => {
        const searchProducts = async (filter: string) => {
            bloc.search(filter);
        };

        searchProducts("Element");
    }, [bloc]);

    return (
        <BlocBuilder
            bloc={bloc}
            builder={(state: ProductsState) => {
                switch (state.kind) {
                    case "LoadingProductsState": {
                        return (
                            <div className={classes.infoContainer}>
                                <CircularProgress />
                            </div>
                        );
                    }
                    case "ErrorProductsState": {
                        return (
                            <div className={classes.infoContainer}>
                                <Typography display="inline" variant="h5" component="h2">
                                    {state.error}
                                </Typography>
                            </div>
                        );
                    }
                    case "LoadedProductsState": {
                        return (
                            <Container className={classes.cardGrid} maxWidth="xl">
                                <Box className={classes.titleContainer}>
                                    <Typography display="inline" variant="h6" component="h2">
                                        {"Results for "}
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
                                    {state.products.map((product, index) => (
                                        <ProductItem product={product} key={index} />
                                    ))}
                                </Grid>
                            </Container>
                        );
                    }
                }
            }}
        />
    );
};

export default ProductList;

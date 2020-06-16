import React from "react";
import MyAppBar from "../appbar/MyAppBar";
import ProductList from "../products/components/ProductList";
import CartDrawer from "../cart/components/CartDrawer";
import {createContext} from "../common/bloc/Context";
import * as DependenciesProvider from "../../di/DependenciesProvider";
import {CartBloc} from "../cart/CartBloc";

const [blocContext, useBloc] = createContext<CartBloc>();

export const useCartBloc = useBloc;

const App: React.FC = () => {
    return (
        <blocContext.Provider value={DependenciesProvider.provideCartBloc()}>
            <MyAppBar />
            <ProductList />
            <CartDrawer />
        </blocContext.Provider>
    );
};

export default App;

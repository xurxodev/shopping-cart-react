import React from "react";
import MyAppBar from "../appbar/MyAppBar";
import ProductList from "../products/components/ProductList";
import * as DependenciesProvider from "../../di/DependenciesProvider"

const App: React.FC = () => {
 
  const productsPresenter = DependenciesProvider.provideProductsPresenter();

  return (
    <div>
      <MyAppBar />
      <ProductList productsPresenter={productsPresenter}/>
    </div>
  );
};

export default App;

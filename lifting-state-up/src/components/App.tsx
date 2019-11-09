import React from "react";
import MyAppBar from "./MyAppBar";
import ProductList from "./ProductList";
import * as DependenciesProvider from "../di/DependenciesProvider"

const App: React.FC = () => {
 
  const getProductsUseCase = DependenciesProvider.provideGetProductUseCase();

  return (
    <div>
      <MyAppBar />
      <ProductList getProductsUseCase={getProductsUseCase}/>
    </div>
  );
};

export default App;

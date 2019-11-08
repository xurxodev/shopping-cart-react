import React from "react";
import MyAppBar from "./MyAppBar";
import ProductList from "./ProductList";

const App: React.FC = () => {
  return (
    <div>
      <MyAppBar />
      <ProductList/>
    </div>
  );
};

export default App;

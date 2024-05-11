import React, { useState } from "react";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState(null);
  
  const handleProducts = products => {
    setProducts(products);
  }

  return <ProductContext.Provider value={{ products, handleProducts }}>{props.children}</ProductContext.Provider>;
};

export default ProductProvider;

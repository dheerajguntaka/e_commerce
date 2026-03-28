import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="row-layout">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
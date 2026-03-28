import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image?.medium} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.genres.join(", ")}</p>
    </div>
  );
};

export default ProductCard;
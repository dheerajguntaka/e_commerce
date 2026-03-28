import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api/productActions";
import ProductDetail from "../components/ProductDetail";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      {/* 🔙 Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> &gt;{" "}
        <span className="active">{product.name}</span>
      </div>

      {/* 🔙 Go Back Button */}
      <button onClick={() => navigate("/")} className="back-btn">
        ⬅ Go Back
      </button>

      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;


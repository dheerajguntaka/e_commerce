import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productActions";
import ProductGrid from "../components/ProductGrid";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 50));
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TV Shows Store</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;
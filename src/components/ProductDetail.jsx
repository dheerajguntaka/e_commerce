import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="detail-page">

      {/* 🔝 HEADER IMAGE */}
      <div className="detail-header">
        <img
          src={product.image?.original}
          alt={product.name}
        />
      </div>

      {/* 📄 CONTENT */}
      <div className="detail-content">
        <h1>{product.name}</h1>

        <p
          dangerouslySetInnerHTML={{ __html: product.summary }}
        />
      </div>
      <div className="detail-content">
        <button
          className="back-btn"
          onClick={() => window.open(product.officialSite, "_blank")}
        >
          Visit Official Site
        </button>
      </div>

      {/* 📦 FOOTER */}
      <div className="detail-footer">
        <p><b>Genres:</b> {product.genres.join(", ")}</p>
        <p><b>Rating:</b> ⭐ {product.rating?.average}</p>
        <p><b>Premiered:</b> {product.premiered}</p>
      </div>
      <div className="detail-footer">
        

      </div>

    </div>
  );
};

export default ProductDetail;
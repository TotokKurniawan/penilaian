import React, { useState } from "react";
import "../assets/productStyle.css";

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
 
  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      indoor: "🏠 Indoor",
      outdoor: "🌞 Outdoor",
      succulent: "🌵 Succulent",
    };
    return labels[category] || category;
  };

  const getStockStatus = (stock) => {
    if (stock > 20) return { text: "Stok Banyak", class: "stock-high" };
    if (stock > 10) return { text: "Stok Terbatas", class: "stock-medium" };
    return { text: "Stok Sedikit", class: "stock-low" };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.stock < 15 && <div className="product-badge">🔥 Terbatas</div>}
      {product.rating >= 4.8 && (
        <div className="product-badge bestseller">⭐ Terlaris</div>
      )}

      {/* Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} className="product-img" />
        {isHovered && (
          <div className="product-overlay">
            <button
              className="quick-view-btn"
              onClick={() =>
                alert(`Detail: ${product.name}\n\n${product.description}`)
              }
            >
              👁️ Lihat Detail
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="product-content">
        {/* Category */}
        <div className="product-category">
          {getCategoryLabel(product.category)}
        </div>

        {/* Name */}
        <h3 className="product-name">{product.name}</h3>

        {/* Description */}
        <p className="product-description">{product.description}</p>

        {/* Rating */}
        <div className="product-rating">
          <span className="rating-stars">⭐</span>
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">(50+ review)</span>
        </div>

        {/* Stock */}
        <div className={`product-stock ${stockStatus.class}`}>
          📦 {stockStatus.text} ({product.stock} unit)
        </div>

        {/* Footer */}
        <div className="product-footer">
          <div className="product-price">{formatPrice(product.price)}</div>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "❌ Habis" : "🛒 Tambah"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

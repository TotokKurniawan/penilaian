import React from "react";
import "../assets/productStyle.css";

function ProductFilter({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  productCount,
}) {
  const categories = [
    { id: "all", name: "Semua Tanaman", icon: "🌿", count: 12 },
    { id: "indoor", name: "Indoor", icon: "🏠", count: 5 },
    { id: "outdoor", name: "Outdoor", icon: "🌞", count: 4 },
    { id: "succulent", name: "Succulent", icon: "🌵", count: 3 },
  ];

  const priceRanges = [
    { label: "Semua Harga", min: 0, max: 1000000 },
    { label: "Di bawah 50rb", min: 0, max: 50000 },
    { label: "50rb - 100rb", min: 50000, max: 100000 },
    { label: "100rb - 150rb", min: 100000, max: 150000 },
    { label: "Di atas 150rb", min: 150000, max: 1000000 },
  ];

  const sortOptions = [
    { value: "name", label: "Nama (A-Z)" },
    { value: "price-low", label: "Harga Terendah" },
    { value: "price-high", label: "Harga Tertinggi" },
    { value: "rating", label: "Rating Tertinggi" },
  ];

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 1000000]);
    setSearchQuery("");
    setSortBy("name");
  };

  return (
    <aside className="filter-sidebar">
      {/* Search Box */}
      <div className="filter-section search-section">
        <h3 className="filter-title">🔍 Cari Tanaman</h3>
        <input
          type="text"
          className="search-input"
          placeholder="Cari nama tanaman..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3 className="filter-title">📂 Kategori</h3>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-item ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h3 className="filter-title">💰 Rentang Harga</h3>
        <div className="price-range-list">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              className={`price-range-item ${
                priceRange[0] === range.min && priceRange[1] === range.max
                  ? "active"
                  : ""
              }`}
              onClick={() => handlePriceRangeChange(range.min, range.max)}
            >
              {range.label}
            </button>
          ))}
        </div>
        <div className="custom-price-range">
          <label className="price-label">
            Min: Rp {priceRange[0].toLocaleString("id-ID")}
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value), priceRange[1]])
            }
            className="price-slider"
          />
          <label className="price-label">
            Max: Rp {priceRange[1].toLocaleString("id-ID")}
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="price-slider"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="filter-section">
        <h3 className="filter-title">📊 Urutkan</h3>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="filter-section results-section">
        <div className="results-info">
          <span className="results-icon">✅</span>
          <div>
            <p className="results-count">{productCount} Produk</p>
            <p className="results-label">ditemukan</p>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="filter-section">
        <button className="reset-button" onClick={resetFilters}>
          🔄 Reset Filter
        </button>
      </div>
    </aside>
  );
}

export default ProductFilter;

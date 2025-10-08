import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProductFilter from "../component/productFilter";
import ProductCard from "../component/productCard";
import Cart from "../component/cart";
import "../assets/productStyle.css";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Data produk
  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      category: "indoor",
      price: 150000,
      image: "/img/monstera.jpg",
      description: "Tanaman hias indoor dengan daun berlubang yang unik",
      stock: 15,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sansevieria",
      category: "indoor",
      price: 75000,
      image: "/img/sensi.jpg",
      description: "Tanaman lidah mertua yang mudah perawatan",
      stock: 25,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Mawar Merah",
      category: "outdoor",
      price: 50000,
      image: "/img/mawar.jpg",
      description: "Bunga mawar merah segar untuk taman",
      stock: 30,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Kaktus Mini",
      category: "succulent",
      price: 35000,
      image: "/img/kaktus.jpg",
      description: "Kaktus mini lucu untuk dekorasi meja",
      stock: 40,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Lavender",
      category: "outdoor",
      price: 65000,
      image: "/img/lavender.jpg",
      description: "Tanaman lavender aromatik",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Pothos",
      category: "indoor",
      price: 45000,
      image: "/img/pothos.jpg",
      description: "Tanaman gantung yang tumbuh cepat",
      stock: 35,
      rating: 4.9,
    },
    {
      id: 7,
      name: "Succulent Mix",
      category: "succulent",
      price: 85000,
      image: "/img/mix.jpg",
      description: "Paket 5 succulent berbeda dalam pot cantik",
      stock: 18,
      rating: 4.7,
    },
    {
      id: 8,
      name: "Anggrek Bulan",
      category: "outdoor",
      price: 200000,
      image: "/img/anggrek.jpg",
      description: "Anggrek bulan putih elegant",
      stock: 12,
      rating: 4.9,
    },
    {
      id: 9,
      name: "Philodendron",
      category: "indoor",
      price: 120000,
      image: "/img/phylo.jpg",
      description: "Philodendron dengan daun hijau mengkilap",
      stock: 22,
      rating: 4.8,
    },
    {
      id: 10,
      name: "Aloe Vera",
      category: "succulent",
      price: 40000,
      image: "/img/aloevera.jpg",
      description: "Lidah buaya untuk perawatan kulit",
      stock: 50,
      rating: 4.7,
    },
    {
      id: 11,
      name: "Peace Lily",
      category: "indoor",
      price: 95000,
      image: "/img/lily.jpg",
      description: "Tanaman pembersih udara dengan bunga putih",
      stock: 28,
      rating: 4.8,
    },
    {
      id: 12,
      name: "Bougenville",
      category: "outdoor",
      price: 110000,
      image: "/img/bougenville.jpg",
      description: "Bougenville warna-warni untuk taman",
      stock: 15,
      rating: 4.6,
    },
  ];

  // 🔎 Filter produk
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchPrice && matchSearch;
  });

  // ↕️ Sort produk
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // 🛒 Add to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} ditambahkan ke keranjang!`);
  };

  // 📝 Update cart quantity
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // ❌ Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // 🧹 Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // 💰 Total belanja
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div id="product-hero" className="product-page">
      <Header />

      <main className="product-content">
        <section className="product-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Koleksi <span className="highlight">Tanaman</span>
            </h1>
            <p className="hero-subtitle">
              Temukan tanaman favorit Anda dari koleksi terlengkap kami
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{products.length}+</span>
                <span className="stat-label">Jenis Tanaman</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8⭐</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Pelanggan</span>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="products-container">
            <div className="products-layout">
              <ProductFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sortBy={sortBy}
                setSortBy={setSortBy}
                productCount={sortedProducts.length}
              />

              {/* Products Grid */}
              <div className="products-main">
                <div className="products-header">
                  <div className="products-info">
                    <h2>Menampilkan {sortedProducts.length} Produk</h2>
                    <p>Pilih tanaman favorit Anda</p>
                  </div>
                  <button
                    className="cart-toggle-btn"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                  >
                    🛒 Keranjang
                    {cartItems.length > 0 && (
                      <span className="cart-badge">{cartItems.length}</span>
                    )}
                  </button>
                </div>

                <div className="products-grid">
                  {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                      />
                    ))
                  ) : (
                    <div className="no-products">
                      <div className="no-products-icon">🔍</div>
                      <h3>Tidak ada produk ditemukan</h3>
                      <p>Coba ubah filter atau kata kunci pencarian Anda</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
          cartTotal={cartTotal}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Product;

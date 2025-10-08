import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ⬅️ tambahkan
import "./headerStyle.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-icon">🌿</span>
          <span className="brand-text">Sony Nursery</span>
        </div>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <HashLink to="/home#home" className="nav-link">
            🏠 Home
          </HashLink>
          <HashLink to="/about#about" className="nav-link">
            ℹ️ About
          </HashLink>
          {/* ganti NavLink dengan HashLink */}
          <HashLink smooth to="/products#product-hero" className="nav-link">
            🌱 Product
          </HashLink>
          <HashLink to="/contact#contact" className="nav-link">
            📞 Kontak
          </HashLink>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;

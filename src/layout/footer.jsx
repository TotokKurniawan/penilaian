import React, { useState } from "react";
import "./footerStyle.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Terima kasih! Email ${email} telah didaftarkan untuk newsletter.`);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <span className="brand-text">Sony Nursery</span>
            </div>
            <p className="footer-description">
              Toko tanaman hias terpercaya dengan koleksi lengkap dan
              berkualitas. Kami membantu Anda menciptakan ruang hijau yang indah
              dan asri.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                📘
              </a>
              <a href="#" className="social-link" title="Instagram">
                📷
              </a>
              <a href="#" className="social-link" title="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" title="WhatsApp">
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Tautan Cepat</h3>
            <ul className="footer-links">
              <li>
                <a href="/home">🏠 Home</a>
              </li>
              <li>
                <a href="/products">🌱 Product</a>
              </li>
              <li>
                <a href="/about">ℹ️ About</a>
              </li>
              <li>
                <a href="/contact">📞 Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3 className="footer-title">Layanan</h3>
            <ul className="footer-links">
              <li>
                <a href="/#">📦 Cara Belanja</a>
              </li>
              <li>
                <a href="/#">🚚 Pengiriman</a>
              </li>
              <li>
                <a href="/#">💳 Pembayaran</a>
              </li>
              <li>
                <a href="/#">🔄 Pengembalian</a>
              </li>
              <li>
                <a href="/#">❓ FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Hubungi Kami</h3>
            <div className="contact-info">
              <p className="contact-item">
                📍 Jl. Ikan Tongkol, Kota Probolinggo
              </p>
              <p className="contact-item">📞 +62 857-061-794-85</p>
              <p className="contact-item">✉️ totokkurniawan710@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © 2024 Sony Nursery. All rights reserved. Made with 💚 for plant
              lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

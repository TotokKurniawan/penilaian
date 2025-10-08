import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "../assets/homeStyle.css";

function Home() {
  const categories = [
    { name: "Tanaman Indoor", icon: "🏠", count: 45 },
    { name: "Tanaman Outdoor", icon: "🌳", count: 38 },
    { name: "Tanaman Hias Gantung", icon: "🪴", count: 27 },
    { name: "Kaktus & Sukulen", icon: "🌵", count: 32 },
    { name: "Bonsai", icon: "🎋", count: 15 },
    { name: "Tanaman Buah", icon: "🍊", count: 22 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Ibu Rumah Tangga",
      image: "👩",
      rating: 5,
      text: "Tanaman yang saya beli sangat segar dan sehat! Pengiriman cepat dan packaging rapi. Sangat puas!",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "👨",
      rating: 5,
      text: "Pelayanan sangat memuaskan. Tim customer service sangat membantu dalam memberikan tips perawatan.",
    },
    {
      id: 3,
      name: "Linda Kusuma",
      role: "Karyawan",
      image: "👩‍💼",
      rating: 5,
      text: "Harga terjangkau dengan kualitas premium. Rumah jadi lebih asri dan segar. Highly recommended!",
    },
    {
      id: 4,
      name: "Andi Pratama",
      role: "Mahasiswa",
      image: "👨‍🎓",
      rating: 4,
      text: "Pilihan tanaman sangat beragam dan cocok untuk pemula seperti saya. Terima kasih Sony Nursery!",
    },
  ];

  const careTips = [
    {
      id: 1,
      icon: "💧",
      title: "Penyiraman Teratur",
      description:
        "Siram tanaman sesuai kebutuhan. Tanaman indoor umumnya membutuhkan penyiraman 2-3 kali seminggu.",
      color: "#4fc3f7",
    },
    {
      id: 2,
      icon: "☀️",
      title: "Cahaya Matahari",
      description:
        "Pastikan tanaman mendapat cahaya yang cukup. Letakkan di tempat yang terkena sinar tidak langsung.",
      color: "#ffb74d",
    },
    {
      id: 3,
      icon: "🌡️",
      title: "Suhu Ideal",
      description:
        "Jaga suhu ruangan 18-27°C. Hindari menempatkan tanaman di dekat AC atau pemanas langsung.",
      color: "#e57373",
    },
    {
      id: 4,
      icon: "✂️",
      title: "Pemangkasan Rutin",
      description:
        "Pangkas daun yang kering atau mati secara berkala untuk menjaga kesehatan dan estetika tanaman.",
      color: "#81c784",
    },
  ];

  const orderSteps = [
    {
      id: 1,
      icon: "🔍",
      title: "Pilih Tanaman",
      description:
        "Browse koleksi tanaman kami dan pilih yang sesuai dengan kebutuhan Anda",
    },
    {
      id: 2,
      icon: "🛒",
      title: "Tambah ke Keranjang",
      description:
        "Masukkan tanaman pilihan ke keranjang belanja dan atur jumlahnya",
    },
    {
      id: 3,
      icon: "💳",
      title: "Checkout & Bayar",
      description:
        "Lengkapi data pengiriman dan lakukan pembayaran dengan aman",
    },
    {
      id: 4,
      icon: "📦",
      title: "Terima Pesanan",
      description:
        "Tanaman akan dikemas dengan aman dan dikirim ke alamat Anda",
    },
  ];

  return (
    <div id="home" className="home-page">
      <Header />

      <main className="home-content">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                Ciptakan Ruang Hijau{" "}
                <span className="highlight">Impian Anda</span>
              </h1>
              <p className="hero-description">
                Koleksi tanaman hias terlengkap dengan harga terjangkau.
                Hadirkan keindahan alam ke dalam rumah Anda!
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">🛒 Belanja Sekarang</button>
                <button className="btn btn-secondary">
                  📖 Panduan Merawat
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Produk</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Pelanggan</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9⭐</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-plant">🌿</div>
              <div className="floating-badge badge-1">💚 Fresh</div>
              <div className="floating-badge badge-2">🌱 Organik</div>
              <div className="floating-badge badge-3">📦 Gratis Ongkir</div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="section-container">
            <h2 className="section-title">🗂️ Kategori Populer</h2>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-count">{category.count} Produk</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">💬 Apa Kata Pelanggan Kami</h2>
              <p className="section-subtitle">
                Ribuan pelanggan puas telah mempercayai kami
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {testimonial.image}
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="care-tips-section">
          <div className="section-container">
            <h2 className="section-title">🌱 Tips Perawatan Tanaman</h2>
            <p className="section-subtitle">
              Panduan mudah untuk menjaga tanaman Anda tetap sehat dan indah
            </p>
            <div className="care-tips-grid">
              {careTips.map((tip) => (
                <div key={tip.id} className="care-tip-card">
                  <div
                    className="care-tip-icon"
                    style={{ background: `${tip.color}20`, color: tip.color }}
                  >
                    {tip.icon}
                  </div>
                  <h3 className="care-tip-title">{tip.title}</h3>
                  <p className="care-tip-description">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="care-tips-cta">
              <button className="btn btn-primary">
                📖 Lihat Panduan Lengkap
              </button>
            </div>
          </div>
        </section>

        <section className="order-steps-section">
          <div className="section-container">
            <h2 className="section-title">📦 Cara Order di Sony Nursery</h2>
            <p className="section-subtitle">
              Proses pemesanan yang mudah dan cepat
            </p>
            <div className="order-steps-timeline">
              {orderSteps.map((step, index) => (
                <div key={step.id} className="order-step">
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {index < orderSteps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="order-cta">
              <button className="btn btn-primary">🛒 Mulai Belanja</button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-container">
            <h2 className="section-title">🎁 Kenapa Memilih Sony Nursery?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🚚</div>
                <h3 className="benefit-title">Gratis Ongkir</h3>
                <p className="benefit-text">
                  Untuk pembelian minimal Rp 200.000
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌱</div>
                <h3 className="benefit-title">Kualitas Terjamin</h3>
                <p className="benefit-text">
                  Tanaman segar langsung dari petani
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💬</div>
                <h3 className="benefit-title">Konsultasi Gratis</h3>
                <p className="benefit-text">Tim ahli siap membantu Anda 24/7</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔄</div>
                <h3 className="benefit-title">Garansi 7 Hari</h3>
                <p className="benefit-text">
                  Pengembalian mudah jika ada masalah
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="section-container">
            <div className="newsletter-content">
              <div className="newsletter-text">
                <h2 className="newsletter-title">
                  📧 Dapatkan Tips & Promo Eksklusif
                </h2>
                <p className="newsletter-description">
                  Berlangganan newsletter kami untuk mendapatkan tips merawat
                  tanaman dan promo spesial
                </p>
              </div>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="newsletter-input"
                />
                <button className="btn-subscribe">Berlangganan</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

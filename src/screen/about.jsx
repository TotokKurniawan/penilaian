import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "../assets/aboutStyle.css";

function About() {
  const values = [
    {
      icon: "🌿",
      title: "Sustainability",
      description:
        "Berkomitmen pada praktik ramah lingkungan dan berkelanjutan",
    },
    {
      icon: "💚",
      title: "Quality First",
      description: "Hanya menyediakan tanaman berkualitas terbaik untuk Anda",
    },
    {
      icon: "🤝",
      title: "Customer Centric",
      description: "Kepuasan pelanggan adalah prioritas utama kami",
    },
    {
      icon: "📚",
      title: "Education",
      description:
        "Memberdayakan masyarakat dengan pengetahuan tentang tanaman",
    },
  ];

  return (
    <div id="about" className="about-page">
      <Header />

      <main className="about-content">
        <section className="about-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Tentang <span className="highlight">Sony Nursery</span>
            </h1>
            <p className="hero-subtitle">
              Menghijaukan Indonesia, Satu Tanaman pada Satu Waktu
            </p>
            <div className="hero-icon">🌿</div>
          </div>
        </section>

        <section className="story-section">
          <div className="section-container">
            <div className="story-grid">
              <div className="story-image">
                <div className="image-placeholder">🏢</div>
              </div>
              <div className="story-text">
                <h2 className="section-title">Cerita Kami</h2>
                <p className="story-paragraph">
                  Sony Nursery dimulai dari mimpi sederhana untuk membuat
                  tanaman hias mudah diakses oleh semua orang. Kami percaya
                  bahwa setiap rumah layak memiliki sentuhan hijau yang
                  menyegarkan.
                </p>
                <p className="story-paragraph">
                  Berawal dari sebuah toko kecil di Kota Probolinggo pada tahun
                  2006, kini kami telah berkembang menjadi platform e-commerce
                  terpercaya dengan ribuan pelanggan di seluruh Indonesia.
                </p>
                <p className="story-paragraph">
                  Misi kami adalah tidak hanya menjual tanaman, tetapi juga
                  mengedukasi masyarakat tentang pentingnya kehijauan dan cara
                  merawat tanaman dengan baik.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision-section">
          <div className="section-container">
            <div className="mv-grid">
              <div className="mv-card mission-card">
                <div className="mv-icon">🎯</div>
                <h3 className="mv-title">Misi Kami</h3>
                <p className="mv-text">
                  Menyediakan tanaman berkualitas tinggi dengan harga
                  terjangkau, sambil memberikan edukasi dan dukungan untuk
                  membantu pelanggan merawat tanaman mereka dengan sukses.
                </p>
              </div>
              <div className="mv-card vision-card">
                <div className="mv-icon">🔭</div>
                <h3 className="mv-title">Visi Kami</h3>
                <p className="mv-text">
                  Menjadi platform #1 di Indonesia untuk semua kebutuhan tanaman
                  hias, menciptakan komunitas pecinta tanaman yang kuat dan
                  menginspirasi gaya hidup yang lebih hijau.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="section-container">
            <h2 className="section-title">Nilai-Nilai Kami</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title">Siap Menghijaukan Rumah Anda?</h2>
              <p className="cta-description">
                Bergabunglah dengan ribuan pelanggan yang telah mempercayai Sony
                Nursery
              </p>
              <button className="cta-button">🛒 Mulai Belanja Sekarang</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;

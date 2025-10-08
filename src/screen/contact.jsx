import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "../assets/contactStyle.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon harus diisi";
    } else if (!/^[0-9]{10,13}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Nomor telepon harus 10-13 digit";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek harus diisi";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan harus diisi";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      details: [
        "Jl. Tanaman Hias No. 123",
        "Jakarta Selatan, DKI Jakarta",
        "Indonesia 12345",
      ],
    },
    {
      icon: "📞",
      title: "Telepon",
      details: [
        "+62 21 1234 5678",
        "+62 812 3456 7890",
        "Senin - Sabtu: 08:00 - 17:00",
      ],
    },
    {
      icon: "✉️",
      title: "Email",
      details: [
        "info@sonynursery.co.id",
        "support@sonynursery.co.id",
        "sales@sonynursery.co.id",
      ],
    },
    {
      icon: "🌐",
      title: "Social Media",
      details: [
        "@sonynursery.official",
        "facebook.com/sonynursery",
        "tiktok.com/@sonynursery",
      ],
    },
  ];

  const faqs = [
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Pengiriman dalam kota 1-2 hari kerja, luar kota 3-5 hari kerja",
    },
    {
      question: "Apakah tanaman dijamin hidup?",
      answer:
        "Ya, kami memberikan garansi 7 hari untuk tanaman yang mati karena cacat produk",
    },
    {
      question: "Bagaimana cara merawat tanaman?",
      answer: "Setiap pembelian dilengkapi dengan panduan perawatan lengkap",
    },
    {
      question: "Apakah bisa konsultasi gratis?",
      answer: "Ya, kami menyediakan konsultasi gratis via WhatsApp dan email",
    },
  ];

  return (
    <div id="contact" className="contact-page">
      <Header />

      <main className="contact-content">
        <section className="contact-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hubungi <span className="highlight">Kami</span>
            </h1>
            <p className="hero-subtitle">
              Kami Siap Membantu Anda dengan Senang Hati
            </p>
            <div className="hero-icon">💬</div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="section-container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">{info.icon}</div>
                  <h3 className="info-title">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="info-detail">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="form-map-section">
          <div className="section-container">
            <div className="form-map-grid">
              <div className="form-container">
                <h2 className="form-title">Kirim Pesan</h2>
                <p className="form-subtitle">
                  Isi formulir di bawah dan kami akan segera menghubungi Anda
                </p>

                {submitted && (
                  <div className="success-message">
                    <span className="success-icon">✅</span>
                    <p>
                      Terima kasih! Pesan Anda telah terkirim. Kami akan
                      menghubungi Anda segera.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? "error" : ""}`}
                        placeholder="08123456789"
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? "error" : ""}`}
                      placeholder="Topik pesan Anda"
                    />
                    {errors.subject && (
                      <span className="error-message">{errors.subject}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${
                        errors.message ? "error" : ""
                      }`}
                      placeholder="Tulis pesan Anda di sini..."
                      rows="6"
                    />
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-button">
                    <span>📧 Kirim Pesan</span>
                  </button>
                </form>
              </div>

              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-wrapper">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.441737955567!2d113.20950074645704!3d-7.742880172420176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ad1589003275%3A0xe9e02d8b287f175c!2sSony%20nursery!5e0!3m2!1sid!2sid!4v1759394396724!5m2!1sid!2sid"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: "12px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Sony Nursery"
                    ></iframe>
                  </div>
                  <h3 className="map-title">Lokasi Kami</h3>
                  <p className="map-description">
                    Kunjungi toko kami untuk melihat langsung koleksi tanaman
                    terlengkap
                  </p>
                  <div className="map-features">
                    <div className="map-feature">
                      <span className="feature-icon">🅿️</span>
                      <span>Parkir Luas</span>
                    </div>
                    <div className="map-feature">
                      <span className="feature-icon">♿</span>
                      <span>Akses Difabel</span>
                    </div>
                    <div className="map-feature">
                      <span className="feature-icon">🌡️</span>
                      <span>AC & Nyaman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-container">
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-card">
                  <div className="faq-question">
                    <span className="faq-icon">❓</span>
                    <h3>{faq.question}</h3>
                  </div>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta-section">
          <div className="section-container">
            <div className="cta-content">
              <div className="cta-icon">💚</div>
              <h2 className="cta-title">Butuh Bantuan Cepat?</h2>
              <p className="cta-description">
                Hubungi customer service kami via WhatsApp untuk respons lebih
                cepat
              </p>
              <button className="whatsapp-button">
                <span>📱 Chat WhatsApp</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;

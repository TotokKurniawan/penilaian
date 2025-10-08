import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/registerStyle.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthPlace: "",
    birthDate: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nama depan harus diisi";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Nama depan minimal 2 karakter";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nama belakang harus diisi";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Nama belakang minimal 2 karakter";
    }

    if (!formData.email) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password =
        "Password harus mengandung huruf besar, kecil, dan angka";
    }

    // Validasi Konfirmasi Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    // Validasi Gender
    if (!formData.gender) {
      newErrors.gender = "Jenis kelamin harus dipilih";
    }

    // Validasi Tempat Lahir
    if (!formData.birthPlace.trim()) {
      newErrors.birthPlace = "Tempat lahir harus diisi";
    }

    // Validasi Tanggal Lahir
    if (!formData.birthDate) {
      newErrors.birthDate = "Tanggal lahir harus diisi";
    }

    // Validasi Nomor Telepon
    if (!formData.phone) {
      newErrors.phone = "Nomor telepon harus diisi";
    } else if (!/^[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Nomor telepon tidak valid (10-13 digit)";
    }

    // Validasi Terms & Conditions
    if (!agreedToTerms) {
      newErrors.terms = "Anda harus menyetujui syarat dan ketentuan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        alert(
          `Pendaftaran berhasil!\n\nNama: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nSelamat bergabung di Sony Nursery! 🌱`
        );
        navigate("/");
      }, 2000);
    }
  };

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

  return (
    <div className="register-container">
      <div className="bg-decoration">
        <div className="leaf leaf-1">🌿</div>
        <div className="leaf leaf-2">🍃</div>
        <div className="leaf leaf-3">🌱</div>
        <div className="leaf leaf-4">🪴</div>
      </div>

      <div className="register-card">
        {/* Header */}
        <div className="register-header">
          <div className="logo-circle">
            <span className="logo-icon">🌿</span>
          </div>
          <h1 className="brand-name">Bergabung dengan Sony Nursery</h1>
          <p className="brand-tagline">
            Mulai petualangan hijau Anda bersama kami
          </p>
        </div>

        <div className="register-form">
          {/* Nama Depan & Belakang - Bersebelahan */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                Nama Depan
              </label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.firstName ? "input-error" : ""
                  }`}
                  placeholder="Nama depan"
                />
              </div>
              {errors.firstName && (
                <p className="error-message">⚠️ {errors.firstName}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Nama Belakang
              </label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.lastName ? "input-error" : ""
                  }`}
                  placeholder="Nama belakang"
                />
              </div>
              {errors.lastName && (
                <p className="error-message">⚠️ {errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "input-error" : ""}`}
                placeholder="nama@email.com"
              />
            </div>
            {errors.email && <p className="error-message">⚠️ {errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
                placeholder="Minimal 8 karakter"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && (
              <p className="error-message">⚠️ {errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Konfirmasi Password
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔐</span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                placeholder="Masukkan ulang password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="toggle-password"
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="error-message">⚠️ {errors.confirmPassword}</p>
            )}
          </div>

          {/* Gender Input */}
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Jenis Kelamin
            </label>
            <div className="input-wrapper">
              <span className="input-icon">⚧️</span>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`form-input ${errors.gender ? "input-error" : ""}`}
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
            {errors.gender && (
              <p className="error-message">⚠️ {errors.gender}</p>
            )}
          </div>

          {/* Tempat & Tanggal Lahir - Bersebelahan */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="birthPlace" className="form-label">
                Tempat Lahir
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input
                  type="text"
                  id="birthPlace"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.birthPlace ? "input-error" : ""
                  }`}
                  placeholder="Kota kelahiran"
                />
              </div>
              {errors.birthPlace && (
                <p className="error-message">⚠️ {errors.birthPlace}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="birthDate" className="form-label">
                Tanggal Lahir
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📅</span>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.birthDate ? "input-error" : ""
                  }`}
                />
              </div>
              {errors.birthDate && (
                <p className="error-message">⚠️ {errors.birthDate}</p>
              )}
            </div>
          </div>

          {/* Phone Input */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Nomor Telepon
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📱</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? "input-error" : ""}`}
                placeholder="08xxxxxxxxxx"
              />
            </div>
            {errors.phone && <p className="error-message">⚠️ {errors.phone}</p>}
          </div>

          {/* Terms and Conditions */}
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={agreedToTerms}
                onChange={(e) => {
                  setAgreedToTerms(e.target.checked);
                  if (errors.terms) {
                    setErrors((prev) => ({ ...prev, terms: "" }));
                  }
                }}
              />
              <span>
                Saya setuju dengan{" "}
                <a href="#" className="link-text">
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="link-text">
                  Kebijakan Privasi
                </a>
              </span>
            </label>
            {errors.terms && <p className="error-message">⚠️ {errors.terms}</p>}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="btn-submit"
          >
            {isLoading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Mendaftar...
              </span>
            ) : (
              "Daftar Sekarang 🌱"
            )}
          </button>
        </div>

        {/* Login Link */}
        <div className="register-footer">
          <p className="footer-text">
            Sudah punya akun?{" "}
            <a href="/" className="login-link">
              Masuk di sini
            </a>
          </p>
          <p className="footer-tagline">
            🌿 Bergabunglah dengan komunitas pecinta tanaman!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

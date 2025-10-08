import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/loginStyle.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
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
          `Selamat datang kembali!\nEmail: ${formData.email}\n\nAnda akan diarahkan ke halaman beranda...`
        );
        navigate("/home");
      }, 1500);
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
    <div className="login-container">
      <div className="bg-decoration">
        <div className="leaf leaf-1">🌿</div>
        <div className="leaf leaf-2">🍃</div>
        <div className="leaf leaf-3">🌱</div>
      </div>

      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="logo-circle">
            <span className="logo-icon">🌿</span>
          </div>
          <h1 className="brand-name">Sony Nursery</h1>
          <p className="brand-tagline">Masuk ke Toko Tanaman Hias Anda</p>
        </div>

        <div className="login-form">
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
                placeholder="••••••••"
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

          {/* Remember Me & Forgot Password */}
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span>Ingat saya</span>
            </label>
            <a href="forgot" className="forgot-link">
              Lupa password?
            </a>
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
                Memproses...
              </span>
            ) : (
              "Masuk ke Sony Nursery 🌱"
            )}
          </button>
        </div>

        {/* Register Link */}
        <div className="login-footer">
          <p className="footer-text">
            Belum punya akun?{" "}
            <Link to="/register" className="register-link">
              Daftar Sekarang
            </Link>
          </p>
          <p className="footer-tagline">
            🌿 Belanja tanaman hias favorit Anda dengan mudah!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

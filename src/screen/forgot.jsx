import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/forgotStyle.css";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setErrors({});

    if (!email.trim()) {
      setErrors({ email: "Email harus diisi" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Format email tidak valid" });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      alert(`Kode OTP telah dikirim ke ${email}`);
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1);

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setErrors({});

    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setErrors({ otp: "Masukkan kode OTP lengkap" });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (otpCode === "123456") {
        setStep(3);
      } else {
        setErrors({ otp: "Kode OTP salah, coba lagi" });
      }
    }, 1500);
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setErrors({});
    alert("Kode OTP baru telah dikirim ke email Anda!");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setErrors({});

    if (!newPassword) {
      setErrors({ newPassword: "Password baru harus diisi" });
      return;
    }

    if (newPassword.length < 8) {
      setErrors({ newPassword: "Password minimal 8 karakter" });
      return;
    }

    if (!confirmPassword) {
      setErrors({ confirmPassword: "Konfirmasi password harus diisi" });
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors({ confirmPassword: "Password tidak cocok" });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="forgot-form-container">
            <div className="forgot-icon">📧</div>
            <h2 className="forgot-title">Lupa Password?</h2>
            <p className="forgot-description">
              Masukkan email Anda dan kami akan mengirimkan kode verifikasi
              untuk reset password
            </p>

            <form onSubmit={handleSendEmail} className="forgot-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="example@email.com"
                  />
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? "⏳ Mengirim..." : "📨 Kirim Kode Verifikasi"}
              </button>
            </form>

            <div className="forgot-footer">
              <Link to="/" className="back-link">
                ← Kembali ke Login
              </Link>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="forgot-form-container">
            <div className="forgot-icon">🔐</div>
            <h2 className="forgot-title">Verifikasi OTP</h2>
            <p className="forgot-description">
              Masukkan kode 6 digit yang telah dikirim ke
              <br />
              <strong>{email}</strong>
            </p>

            <form onSubmit={handleVerifyOtp} className="forgot-form">
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="otp-input"
                  />
                ))}
              </div>
              {errors.otp && (
                <span className="error-message center">{errors.otp}</span>
              )}

              <div className="resend-section">
                <p>Tidak menerima kode?</p>
                <button
                  type="button"
                  className="resend-button"
                  onClick={handleResendOtp}
                >
                  🔄 Kirim Ulang
                </button>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? "⏳ Memverifikasi..." : "✅ Verifikasi"}
              </button>
            </form>

            <div className="forgot-footer">
              <button className="back-link" onClick={() => setStep(1)}>
                ← Ganti Email
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="forgot-form-container">
            <div className="forgot-icon">🔒</div>
            <h2 className="forgot-title">Buat Password Baru</h2>
            <p className="forgot-description">
              Password harus minimal 8 karakter dengan kombinasi huruf dan angka
            </p>

            <form onSubmit={handleResetPassword} className="forgot-form">
              <div className="form-group">
                <label htmlFor="newPassword" className="form-label">
                  Password Baru
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`form-input ${
                      errors.newPassword ? "error" : ""
                    }`}
                    placeholder="Masukkan password baru"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.newPassword && (
                  <span className="error-message">{errors.newPassword}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Konfirmasi Password
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`form-input ${
                      errors.confirmPassword ? "error" : ""
                    }`}
                    placeholder="Konfirmasi password baru"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>

              <div className="password-requirements">
                <p className="requirements-title">Password harus mengandung:</p>
                <ul className="requirements-list">
                  <li className={newPassword.length >= 8 ? "valid" : ""}>
                    {newPassword.length >= 8 ? "✅" : "⭕"} Minimal 8 karakter
                  </li>
                  <li className={/[A-Z]/.test(newPassword) ? "valid" : ""}>
                    {/[A-Z]/.test(newPassword) ? "✅" : "⭕"} Huruf besar
                  </li>
                  <li className={/[a-z]/.test(newPassword) ? "valid" : ""}>
                    {/[a-z]/.test(newPassword) ? "✅" : "⭕"} Huruf kecil
                  </li>
                  <li className={/[0-9]/.test(newPassword) ? "valid" : ""}>
                    {/[0-9]/.test(newPassword) ? "✅" : "⭕"} Angka
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? "⏳ Menyimpan..." : "💾 Reset Password"}
              </button>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="forgot-form-container success-container">
            <div className="success-animation">
              <div className="success-icon">✅</div>
            </div>
            <h2 className="forgot-title">Password Berhasil Direset!</h2>
            <p className="forgot-description">
              Password Anda telah berhasil diubah. Sekarang Anda dapat login
              dengan password baru.
            </p>

            <div className="success-actions">
              <Link to="/" className="submit-button">
                🔓 Login Sekarang
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-background">
        <div className="background-shape shape-1"></div>
        <div className="background-shape shape-2"></div>
        <div className="background-shape shape-3"></div>
      </div>

      <div className="forgot-container">
        <div className="forgot-card">
          {step < 4 && (
            <div className="progress-steps">
              <div
                className={`step ${step >= 1 ? "active" : ""} ${
                  step > 1 ? "completed" : ""
                }`}
              >
                <div className="step-circle">1</div>
                <span className="step-label">Email</span>
              </div>
              <div className="step-line"></div>
              <div
                className={`step ${step >= 2 ? "active" : ""} ${
                  step > 2 ? "completed" : ""
                }`}
              >
                <div className="step-circle">2</div>
                <span className="step-label">Verifikasi</span>
              </div>
              <div className="step-line"></div>
              <div
                className={`step ${step >= 3 ? "active" : ""} ${
                  step > 3 ? "completed" : ""
                }`}
              >
                <div className="step-circle">3</div>
                <span className="step-label">Reset</span>
              </div>
            </div>
          )}

          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

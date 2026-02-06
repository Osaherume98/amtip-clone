import React, { useState } from "react";
import "./SignupPage.css"; 

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.includes("@")) newErrors.email = "Please enter a valid email";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        fullName,
        email,
        password,
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      <div className="signup-card">
        <div className="card-overlay"></div>

        <div className="signup-header">
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join us and access your admin dashboard</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
         
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-input"
                placeholder="Full Name"
              />
              <svg className="input-icon icon" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            {errors.fullName && (
              <div className="error-message">
                <svg className="error-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

          
          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="Email Address"
              />
              <svg className="input-icon icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          
          <div className="form-group">
            <div className="input-container">
              <input
                type={showPassword.password ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Password"
              />
              <svg className="input-icon icon" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <button
                type="button"
                className="password-toggle"
                onClick={() => togglePassword("password")}
              >
                {showPassword.password ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          
          <div className="form-group">
            <div className="input-container">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder="Confirm Password"
              />
              <svg className="input-icon icon" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <button
                type="button"
                className="password-toggle"
                onClick={() => togglePassword("confirmPassword")}
              >
                {showPassword.confirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <div className="signup-footer">
          <p className="footer-text">
            Already have an account? <a href="#" className="footer-link">Sign In</a>
          </p>
          <p className="terms-text">
            By creating an account, you agree to our{" "}
            <a href="#" className="terms-link">Terms of Service</a> and{" "}
            <a href="#" className="terms-link">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

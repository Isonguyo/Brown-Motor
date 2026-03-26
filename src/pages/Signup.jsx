import { useState } from "react";
import "../styles/pages/signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [strength, setStrength] = useState("");

  // Password strength checker
  const checkStrength = (password) => {
    if (password.length < 6) return "Weak";

    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongRegex.test(password)) return "Strong";

    return "Medium";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    // Check password strength
    if (name === "password") {
      setStrength(checkStrength(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Your Account</h2>
        <p>Get started with Brown Motors</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Strength Indicator */}
          {form.password && (
            <div className={`strength ${strength.toLowerCase()}`}>
              {strength} Password
            </div>
          )}

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <span className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </span>
      </div>
    </div>
  );
}

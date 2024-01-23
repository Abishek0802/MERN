import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Simple validation
    const errors = {};

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    // Password validation (6 characters, at least one uppercase, one lowercase, one special character, and one digit)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.]).{6,}$/;
    if (!password.trim() || !passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one of the following symbols: @ or .";
    }

    if (Object.keys(errors).length === 0) {
      // Proceed with login logic
      console.log("Logging in...", { email, password });
      alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);

      // Redirect to the initial route (replace "/About" with your desired route)
      navigate("/About");
      // Reset the input values to empty strings
      setEmail("");
      setPassword("");
    } else {
      // Display validation errors in an alert
      alert(Object.values(errors).join("\n"));
    }
  };

  return (
    <>
      <div className="form animate__animated animate__bounceIn">
        <h1>Welcome Back</h1>
        <input
          type="text"
          placeholder="E-mail"
          className="input input-bordered input-info w-full max-w-xs"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-info w-full max-w-xs"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>
          Don't have an Account?<Link style={{ color: "blue" }}>Sign up</Link>
        </p>
        <button className="btn" onClick={handleLogin}>
          Login &#128512;
        </button>
      </div>
    </>
  );
}

export default Login;

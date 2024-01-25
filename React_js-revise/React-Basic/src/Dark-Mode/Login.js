import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wholeErr, setwholeErr] = useState("");
  const [errAnimate, seterrorAnimate] = useState("");
  const [wholeErrColor, setwholeErrColor] = useState({
    backgroundColor: "transparent",
  });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Accumulate errors
    const errors = [];

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errors.push("Enter a valid email address");
    }

    // Password validation (6 characters, at least one uppercase, one lowercase, one special character, and one digit)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.]).{6,}$/;
    if (!password.trim() || !passwordRegex.test(password)) {
      errors.push(
        "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one of the following symbols: @ or ."
      );
    }

    if (errors.length === 0) {
      // Proceed with login logic
      console.log("Logging in...", { name, email, password });
      alert(
        `Login successful!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`
      );

      // Redirect to the initial route (replace "/About" with your desired route)
      navigate("/About");
      // Reset the input values to empty strings
      setName("");
      setEmail("");
      setPassword("");
      setwholeErr("");
      setwholeErrColor((prevCol) => ({
        backgroundColor:
          prevCol.backgroundColor === "transparent"
            ? "transparent"
            : "transparent",
      }));
    } else {
      // Display validation errors in a single alert
      setwholeErr(errors.join("\n"));
      setwholeErrColor((prevCol) => ({
        backgroundColor:
          prevCol.backgroundColor === "transparent"
            ? " #7d343b"
            : "transparent",
      }));
      seterrorAnimate("animate__animated animate__headShake");
    }
  };

  return (
    <>
      <p style={wholeErrColor} className={errAnimate} id="err">
        {wholeErr}
      </p>

      <div className="form animate__animated animate__bounceIn">
        <h1>Welcome Back</h1>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-info w-full max-w-xs"
          value={name}
          onChange={handleNameChange}
        />
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

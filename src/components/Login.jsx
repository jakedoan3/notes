import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("successful login!");
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Username or Password was incorrect");
      });
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        {error ? (
          <p className="error">Username or Password was incorrect</p>
        ) : null}
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-button" type="submit">
          Log In
        </button>
      </form>
      <div className="w-100 text-center mt-2">
        Don't have an account? <span></span>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;

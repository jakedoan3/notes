import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("successful signup!");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

    // setLoading(false)
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        {error ? <p className="error">Passwords do not match</p> : null}
        <h2>Create Account</h2>
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
        <input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        ></input>
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
      <div className="w-100 text-center mt-2">
        Already have an account? <span></span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;

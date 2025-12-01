import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/register", {
        fname,
        lname,
        email,
        password,})
      .then((res)=>{
        alert("Signup Successfully!");
        navigate('/home');
      })
      .catch((err)=> console.log(err));  
  };

  return (
    <div className="login">
      <button
        className="theme-btn"
        onClick={() => {
          document.querySelector(".login").classList.toggle("dark");
        }}
      >
        Dark Mode
      </button>

      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {/* IMPORTANT: box wrapper added */}
        <div className="box">
          
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign Up</button>

          <p>
            Already registered? <a href="/sign-in">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;

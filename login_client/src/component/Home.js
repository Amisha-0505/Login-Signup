import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate = useNavigate();

  const handleLogout = () => { 
    navigate("/");               
  };
  return (
   <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">🎉 Welcome Back!</h1>
        <p className="welcome-text">
          You are successfully logged in. Let's begin your journey!
        </p>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Login.scss'

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(email,password);
        const token=await axios.post('http://localhost:9000/login',{email,password});
        console.log(token);
    }
    return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <h1>Sign-In</h1>
        <div className='box'>
        <div>
            <label>Email address</label>
            <div>
                <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
           </div>
        </div>

        <div>
            <label>Password</label>
            <div>
            <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
           />
            </div>
        </div>

        <div>
            <input
            type="checkbox"
           />
           <label htmlFor="customheck1">Remember me</label>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
        <p>
            <a href="/sign-up">Sign Up</a>
        </p>
        </div>
    </form>
    </div >
  )
}

export default Login
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Signup() {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(fname,lname,password,email);
        axios.post('http://localhost:9000/register',{fname,lname,email,password});
    }



    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>

        <div>
            <label>First name</label>
            <div>
            <input
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e)=>{setFname(e.target.value)}}
           />
           </div>
        </div>

        <div>
            <label>Last name</label>
            <div>
            <input
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e)=>{setLname(e.target.value)}}
           />
           </div>
        </div>

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
            <button type="submit">Sign Up</button>
        </div>
        <p>Already registered
            <a href="/sign-in">Sign in</a>
        </p>
        </form>
    </div>
  )
}

export default Signup
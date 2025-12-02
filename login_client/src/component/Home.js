import React from 'react'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <div className='start'>
        <div className='heading'>
            <h1>DNK</h1>
        </div>
          
          <ul>
            <li>EVERYTHING</li>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>ACCESSORIES</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div>
            <button>Login In</button>
          </div>
        </div>  
    </div>
  )
}

export default Home
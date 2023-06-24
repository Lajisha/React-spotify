import React from 'react'
import './Home.css'
import pic from '../assets/spotify.png'

const Home = () => {
  return (
    <div className="container">
        <div className="first">
            <img className="img" src={pic} alt=""></img>
            <div className="navbar">
                    <label htmlFor="">Spotify</label>
                <div className="nav">
                    <a href="">Premium</a>
                    <a href="">Help</a>
                    <a href="">Download</a>
                    |
                    <a href="">Sign up</a>
                    <a href="/Login">Log in</a>
                </div>
            </div>
        </div>

        <div className="second">
            <div className="text">
                <div className="music">
                    Music for everyone
                </div>
                <div className="million">
                    Millions of songs. No credit card needed.   
                </div>
            </div>
            <div className="button">
                <button className='btn'>GET SPOTIFY FREE</button>
            </div>
        </div>
    </div>
  )
}

export default Home

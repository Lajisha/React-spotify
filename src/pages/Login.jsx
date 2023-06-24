import React from 'react'
import './Login.css'

import { useState } from 'react'

const Login = () => {

  const [passwordShown,setPasswordShown]=useState(false);

  const pswd = () => {
    setPasswordShown(!passwordShown);
  }
  
  return (
    <div className="main">
      <form  className='form' action="">
        <div className="formdiv">
            <label htmlFor="" className='login'>Login</label>
            <div className="mail">
              <label htmlFor="Email">Email:</label>
              <input type="email" id='Email' className='box' placeholder='Enter email'title='EMAIL'/>
            </div>
            <div className="pswd">
              <label htmlFor="Password">Password:</label>
              <input type={passwordShown ? "text" : 'password'} id='Password' className='box' placeholder='Enter password' title='PASSWORD'/>          
            </div>
            <div className="check">
              <input type="checkbox" onClick={pswd}/>Show Password
            </div>
            <input type="submit" className='btn1' value='SIGN IN'/>
            <div className="forgot">
              Forgot <a className='link' href="">Username / Password</a>?
            </div>
              <div className="signup">
                  Don't have account? <a className='link' href="">Sign up</a>
            </div>
        
        </div>
      
      </form>
    </div>
  )
}

export default Login

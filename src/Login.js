import { ReactComponent as Password } from "../src/svgs/Password.svg";
import { ReactComponent as Username } from "../src/svgs/Username.svg";
import { ReactComponent as Show } from "../src/svgs/eye.svg";
import { ReactComponent as Hide } from "../src/svgs/eye-slash.svg";
import { useState, useRef, useEffect } from "react";
import './Login.css';
import React from 'react';


export default function Login(){
    const [ passwordShow, setPasswordShow ] = useState(0);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    
  
    function makePasswordVisible(ref, getter, setter){
      setter(!getter);
      if (ref.current.type  === 'text'){
        ref.current.type = 'password';
      } else {
        ref.current.type = 'text';
      }
    }
  
    function showPassFunc(ref, setter){
        if (ref.current.value.length === 0){
          setter(0);
        } else if (ref.current.type === 'text'){
          setter(true);
        } else if (ref.current.type === 'password') {
          setter(false);
        } 
    }
  
    useEffect( () => {
      passwordRef.current.addEventListener('input', () => {
        showPassFunc(passwordRef, setPasswordShow);
      });
      const fetchUsernames = () => {
        
      };
  
      fetchUsernames();
    });

    return (
      <div className="login-page">
        <img src="location.png" alt="" height='250px' width='250px'/>
        <form className='login-form'>
        <h1 id='login-heading'>Login</h1>
        <div className='input-box-div'>
            <div className='input-box-svg-div'>
            <Username className='input-box-svg' />
          </div>
          <input type='text' placeholder='Username' name='username' ref={usernameRef} className='input-box' autoComplete='off' autoCorrect='off'/>
        </div>
        <div className='input-box-div'>
          <div className='input-box-svg-div'>
            <Password className='input-box-svg'/>
          </div>
          <input type='password' placeholder='Password' name='password' className='input-box' ref={passwordRef}/>
          { passwordShow === 0 ? false : passwordShow === true ? <div className='input-box-left-div' onClick={() => {
            makePasswordVisible(passwordRef, passwordShow, setPasswordShow);
          }}><Hide id='hide'/></div> :
          <div className='input-box-left-div' onClick={() => {
            makePasswordVisible(passwordRef, passwordShow, setPasswordShow);
          }}><Show id='show'/></div> }
        </div>
        <button id='login-btn'>LOGIN</button>
        </form>
      </div>
    )
}
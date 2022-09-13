import React from 'react';
import { ReactComponent as Email } from "../src/svgs/Email.svg";
import { ReactComponent as Password } from "../src/svgs/Password.svg";
import { ReactComponent as Username } from "../src/svgs/Username.svg";
import { ReactComponent as Show } from "../src/svgs/eye.svg";
import { ReactComponent as Hide } from "../src/svgs/eye-slash.svg";
import { ReactComponent as Tick } from "../src/svgs/tick.svg";
import { ReactComponent as Cross } from "../src/svgs/cross.svg";
import { ReactComponent as Gender } from "../src/svgs/gender.svg";
import { useState, useRef, useEffect } from "react";
import './Signup.css';

export default function Signup(){
    const [ createBtnActive, setCreateBtnActive ] = useState(false);
    const [ usernameAvaliable, setUsernameAvaliable ] = useState(0);
    const [ passwordConfirmShow, setPasswordConfirmShow ] = useState(0);
    const [ passwordShow, setPasswordShow ] = useState(0);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const passwordRef = useRef(null);
    const usernames = ['chetanvaswani', 'helloworld'];
    
    
    function onType(){
      if (usernameRef.current.value.length === 0){
        setUsernameAvaliable(0);
      } else if (usernames.includes(usernameRef.current.value.toLowerCase())){
        setUsernameAvaliable(false);
      } else if (usernameRef.current.value.includes(' ')) {
        setUsernameAvaliable(false);
      } else {
        setUsernameAvaliable(true);
      }
    }
  
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
      usernameRef.current.addEventListener('input', onType);
      passwordConfirmRef.current.addEventListener('input', () => {
        showPassFunc(passwordConfirmRef, setPasswordConfirmShow);
      });
      passwordRef.current.addEventListener('input', () => {
        showPassFunc(passwordRef, setPasswordShow);
      });
      const fetchUsernames = () => {
        
      };
  
      fetchUsernames();
    });
  
    return(
      <div className="signup-page">
      <form className='signup-form'>
      <h1 id='signup-heading'>Crete new account</h1>
      <div className='input-box-div'>
          <div className='input-box-svg-div'>
          <Username className='input-box-svg' />
        </div>
        <input type='text' placeholder='Username' name='username' ref={usernameRef} className='input-box' autoComplete='off' autoCorrect='off'/>
        { usernameAvaliable === 0 ? false : usernameAvaliable === true ? <div className='input-box-left-div'><Tick className='input-box-left-svg' /></div> : <div className='input-box-left-div'><Cross className='input-box-left-svg' /></div>}
      </div>

      <div className='input-box-div'>
        <div className='input-box-svg-div'>
          <Email className='input-box-svg' />
        </div>
        <input type='email' placeholder='Email' name='username' className='input-box' autoComplete='off' ref={emailRef}/>
      </div>

      <div className='input-box-div'>
      <div className='input-box-svg-div'>
          <Gender className='input-box-svg' id='gender-icon'/>
      </div>
      <select className='input-box' id='dropdown-text' >
        <option value="gender"  >Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
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

      <div className='input-box-div'>
        <div className='input-box-svg-div'>
          <Password className='input-box-svg'/>
        </div>
        <input type='password' placeholder='Confirm Password' name='passwordconfirmation' className='input-box' ref={passwordConfirmRef}/>
        { passwordConfirmShow === 0 ? false : passwordConfirmShow === true ? <div className='input-box-left-div' onClick={() => {
          makePasswordVisible(passwordConfirmRef, passwordConfirmShow, setPasswordConfirmShow);
        }}><Hide id='hide'/></div> :
        <div className='input-box-left-div' onClick={() => {
          makePasswordVisible(passwordConfirmRef, passwordConfirmShow, setPasswordConfirmShow);
        }}><Show id='show'/></div> }
      </div>

      <div id="text"></div>
      <div id='terms-div'>
        <input type='checkbox' name='terms' onClick={() => {
          setCreateBtnActive(!createBtnActive);
        }} /><p id='terms-p'>I agree to all the terms and conditions.</p>
      </div>
      <button id='create-account-btn' disabled={!createBtnActive} onClick={() => {
        [usernameRef.current, emailRef.current, passwordRef.current, passwordConfirmRef.current].forEach((ref) => {
          if (ref.value.length === 0){
            document.getElementById('text').innerHTML = "All the fields must be filled."
          }
        })
      }}>CREATE ACCOUNT</button>
      </form>
      </div>
    );
}
import React, {useEffect, useState} from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

export default function WelcomePage(){
  const [userName, setUserName] = useState("user")

  useEffect(() => {
    function getData() {
        fetch("/profile",).then(response => response.json()).then((res) => {
          setUserName(res.name);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
      console.log(userName)
    }

    getData()
});

    return (
      <div className='welcome-page'>
        <div className='map-design'>
          <div className='circle' id='first'></div>
          <div className='circle' id='second'></div>
          <img src='map.png' alt='' height='220px' width='220px' className='map-img'/>
          <img src='user-group-icon.png' height='125px' width='125px' alt='' className='user-group-icon' />
          <img src='user-files-icon.png' height='140px' width='140px' alt='' className='user-files-icon' />
          <div className='circle' id='third'></div>
          <div className='circle' id='fourth'></div>
        </div>

        <div className='home-page-content'>
          <h1>Create, Find and <br /> Join your circle now.</h1>
          <p id='home-content-p'>
            Enjoy the company of your college mates while <br />
            saving on fuel. Create and manage ride pools, <br />
            get rewards as you reach the milestones set to <br />
            reduce your carbon footprint.
          </p>
          <Link to='/login'><input type='submit' id='get-started' value='Get Started!' /></Link>
        </div>
      </div>
    )
  }
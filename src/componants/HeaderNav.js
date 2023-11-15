import React from 'react';
import {Link} from'react-router-dom';
import DownloadButton from './DownloadButton';


const HeaderNav = () => {
// let toggle=document.querySelector(".toggle")
// let menu = document.querySelector(".menu")

// toggle.onclick=function()
// {
//   menu.classList.toggle("active")
// }

  return (
    <div>
    <div className='navbar'>
        <Link to='/b' className='logo'>Cooltree</Link>
        <i className='fas fa-bars toggle'></i>
        <div className='menu'>
   <ul >
        <Link to='/'><li>Home</li></Link>
        <Link to='/Home'><li>Profile</li></Link>
        <Link to='/signup'><li>Contact</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/signin'><li>SignIn</li></Link>
        </ul>
    </div>
    </div>

    <div className='leftcontainer'>
      <div className='leftbar'>
    <ul >
        <Link to='/'><li>International</li></Link>
        <Link to='/Home'><li>National</li></Link>
        <Link to='/signup'><li>State</li></Link>
        <Link to='/about'><li>Hyderabad</li></Link>
        <Link to='/signin'><li>Politics</li></Link>
        </ul>
        </div>
        <div className='calendar'>
        <DownloadButton/>
    </div>
    </div>
    </div>
  
   
  )
}

export default HeaderNav
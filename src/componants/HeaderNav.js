import React from 'react';
import {Link} from'react-router-dom';
import DownloadButton from './DownloadButton';
import User from './JSONDATA/User';




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
        <Link to='/' className='under'><li>Home</li></Link>
        <Link to='/Home' className='under'><li>Profile</li></Link>
        <Link to='/signup' className='under'><li>Contact</li></Link>
        <Link to='/about' className='under'><li>About</li></Link>
        <Link to='/signin' className='under'><li>SignIn</li></Link>
        </ul>
    </div>
    </div>

    
        <div className='calendar'>
        {/* <DownloadButton/> */}
        {/* <User/> */}
    
    
    </div>
    </div>
  
   
  )
}

export default HeaderNav
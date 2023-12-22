import React,{useState} from 'react';
import {Link} from'react-router-dom';
import './Headernav.css';




const HeaderNav = () => {


const [menuOpen ,setMenuOpen]=useState(false)
  return (
    
    
    <div className='navbar'>
      <Link to='/' id='logo' ><li>CoolTree</li></Link>
        <div className='navmenu' onClick={()=>
        setMenuOpen(!menuOpen)
        }>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        
   <ul className={menuOpen ? "open":""}>
        <h3 onClick={()=>setMenuOpen(!menuOpen)}>X</h3>
        <Link to='/home' onClick={()=>
        setMenuOpen(!menuOpen)
        }><li>Home</li></Link>
        <Link to='/scheme' onClick={()=>
        setMenuOpen(!menuOpen)
        }><li>కేంద్ర పథకాలు</li></Link>
        <Link to='/moralstory' onClick={()=>
        setMenuOpen(!menuOpen)
        }><li>నీతి కథలు</li></Link>
        <Link to='/pradeshalu' onClick={()=>
        setMenuOpen(!menuOpen)
        }><li>ప్రదేశాలు</li></Link>
        <Link to='/vinthalu' onClick={()=>
        setMenuOpen(!menuOpen)
        }><li>ప్రపంచ వింతలు</li></Link>
        </ul>
    
    </div>       
    
 
   
  )
}

export default HeaderNav
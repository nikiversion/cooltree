import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from'react-router-dom';
import './sidebar.css';



const Sidebar = () => {
    const navigate=useNavigate();
    const navigateCalendar =()=>{
      navigate('/calendar')
    }
    const navigateScheme =()=>{
      navigate('/scheme')
    }
    const navigatePradeshalu =()=>{
      navigate('/pradeshalu')
    }
    const navigateNithi =()=>{
      navigate('/moralstory')
    }
    const navigateVinthalu =()=>{
      navigate('/vinthalu')
    }
  return (
    <div>
         <div className='leftcontainer'>
      <div className='leftbar'>
    <ul >
    <Button variant='outline-primary' onClick={navigateVinthalu}>ప్రపంచ వింతలు</Button>
            <Button variant='dark' onClick={navigatePradeshalu}>ప్రదేశాలు</Button>
            <Button variant='success' onClick={navigateScheme}>కేంద్ర పథకాలు</Button>
            {/* <Button onClick={navigateHome} variant='info'>Ent Quiz</Button> */}
            <Button variant='outline-warning' onClick={navigateNithi}> నీతి కథలు</Button>
         
            <Button variant='danger' onClick={navigateCalendar} >2024 క్యాలెండర్</Button>
            
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
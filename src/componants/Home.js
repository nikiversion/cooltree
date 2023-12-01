import React from 'react'
import './home.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from'react-router-dom';

const Home = () => {
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
    <div className='homecontainer'>
      <div className='homebox'>
      <div className='first'>
      <img src='/homepage/wonders.jpg'></img>
      <Button variant='danger' onClick={navigateVinthalu} >ప్రపంచ వింతలు</Button>

      <img src='/calendar/jan.jpeg' ></img>
      <Button variant='warning' onClick={navigateCalendar}>2024 క్యాలెండర్</Button>
      
      </div>
      <div className='second'>
      <img src='/homepage/moralstory.jpg'></img>
      <Button variant='warning' onClick={navigateNithi}>నీతి కథలు</Button>
      <img src='/homepage/scheme.jpg'></img>
      <Button variant='info' onClick={navigateScheme}>కేంద్ర పథకాలు</Button>
      </div>
      <div className='third'>
      <img src='/homepage/pradeshalu.jpg'></img>
      <Button variant='info' onClick={navigatePradeshalu}>ప్రదేశాలు</Button>

      <img src='/homepage/wonders.jpg'></img>
      <Button variant='info' onClick={navigateVinthalu} >ప్రపంచ వింతలు</Button>
      </div>
      </div>
        
    </div>
  )
}

export default Home
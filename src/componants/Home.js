import React from 'react'
import './home.css';

import Button from 'react-bootstrap/Button';
import {useNavigate} from'react-router-dom';
const Home = () => {
  return (
    <div className='homecontainer'>
      <div className='homebox'>
      <div className='first'>
      <img src='/homepage/wonders.jpg'></img>
      <Button variant='danger' >ప్రపంచ వింతలు</Button>

      <img src='/calendar/jan.jpeg'></img>
      <Button variant='warning' >2024 క్యాలెండర్</Button>
      
      </div>
      <div className='second'>
      <img src='/homepage/moralstory.jpg'></img>
      <Button variant='warning' >నీతి కథలు</Button>
      <img src='/homepage/scheme.jpg'></img>
      <Button variant='info' >కేంద్ర పథకాలు</Button>
      </div>
      <div className='third'>
      <img src='/homepage/pradeshalu.jpg'></img>
      <Button variant='info' >ప్రదేశాలు</Button>

      <img src='/homepage/wonders.jpg'></img>
      <Button variant='info' >ప్రపంచ వింతలు</Button>
      </div>
      </div>
        
    </div>
  )
}

export default Home
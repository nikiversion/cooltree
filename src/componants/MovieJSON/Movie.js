import React from 'react';
import Movies from './movie.json';
import './movie.css';
import { Link } from 'react-router-dom';

const Movie = () => {
  return (
    <div className='moviedatacontainer'>
        
        {
    Movies.map(product=><ul>
      
      <div className='moviedata'>
     <Link to={product.location}>
        <li><img src={product.image}/></li>
    <li><p>{product.title}</p></li><br/></Link>
 
    {/* <li><p className='read'
    >{product.story}</p></li> */}
   
    </div>
    
    </ul>)
        }
        
    </div>
  )
}

export default Movie



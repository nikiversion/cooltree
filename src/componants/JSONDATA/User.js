import React from 'react';
import Product from './user.json';
import './user.css';

const User = () => {
  return (
    <div className='userdata'>
        {
    Product.map(product=><ul><li>{product.id}</li>
    <li>{product.city}</li>
    <li><img src={product.image} style={{width:'120px', height:'120px', float:'right'}}/></li>
    <p style={{float:'right'}}>lorem hesgfuwegf.wekujdgawd
      whdgawgda
      ahdcaksgca,scbff,thgjhdhh
    </p>
    </ul>)
        }
    </div>
  )
}

export default User
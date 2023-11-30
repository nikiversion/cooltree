import React from 'react';

const DownloadButton = () => {
    const downloaded=()=>
    {
        alert('downloading completed')
    }
  
  return (
    <div className='calendarmain'>
        <img src='/images/calendar.jpg' ></img><br></br>
        <a href='/images/2024calendar.pdf' download>
            <button style={{color:'white'}} onClick={downloaded} >Download</button>
        </a>
       
    </div>
  )
}

export default DownloadButton
import React from 'react'

const DownloadButton = () => {
    const downloaded=()=>
    {
        alert('downloading completed')
    }
  return (
    <div className='calendarmain'>
        <img src='/images/calendar.jpg' style={{ width:'400px', height:'600px'}}></img>
        <a href='/images/2024calendar.pdf' download>
            <button style={{color:'red'}} onClick={downloaded} >Download</button>
        </a>
    </div>
  )
}

export default DownloadButton
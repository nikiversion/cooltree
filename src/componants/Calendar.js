
import './calendar.css'

const Calendar = () => {
    const HandleDownload=()=>{
        alert("Download Completed")
    }
  return (
    <div className='calendarimagecon'>
    <div className='calendarimage'>
        <div>
        <img src='/calendar/jan.jpeg'></img><br/>
        <a href='/calendar/jan.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/feb.jpeg'></img><br/>
        <a href='/calendar/feb.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/mar.jpeg'></img><br/>
        <a href='/calendar/mar.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/apr.jpeg'></img><br/>
        <a href='/calendar/apr.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/may.jpeg'></img><br/>
        <a href='/calendar/may.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/jun.jpeg'></img><br/>
        <a href='/calendar/jun.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/jul.jpeg'></img><br/>
        <a href='/calendar/jul.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/aug.jpeg'></img><br/>
        <a href='/calendar/aug.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/sep.jpeg'></img><br/>
        <a href='/calendar/sep.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/oct.jpeg'></img><br/>
        <a href='/calendar/oct.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/nov.jpeg'></img><br/>
        <a href='/calendar/nov.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        <div>
        <img src='/calendar/dec.jpeg'></img><br/>
        <a href='/calendar/dec.jpeg' download>
        <button onClick={HandleDownload} >Download</button></a>
        </div>
        </div>
    </div>
  )
}

export default Calendar

import './App.css';
import {Route,Routes,useLocation } from 'react-router-dom';
import HeaderNav from './componants/HeaderNav';
import Home from './componants/Home';
import DownloadButton from './componants/DownloadButton';
import Calendar from './componants/Calendar';
import Sidebar from './componants/Sidebar';

import Scheme from './componants/kendrapathakalu/Scheme';
import HydTourism from './componants/hydtourism/HydTourism';
import MoralStories from './componants/moralStories/MoralStories';
import Vinthalu from './componants/prapanchavintalu/Vinthalu';
import Movie from './componants/MovieJSON/Movie';



function App() {
 const location =useLocation();

const shouldShowSidebar=()=>{
  const {pathname}=location;
  console.log(pathname)
  return !['/home'].includes(pathname);
}
  return (
    <div className="App">
      
      
      
      <HeaderNav/>
      <div className='arrange'>
      
      {shouldShowSidebar()&&<Sidebar/>}
      <Routes>
       
        <Route path='/5' element={<Home/>}/>
       
        <Route path='/6' element={<HydTourism/>}/>
        
        <Route path='/' element={<Calendar/>}/>
        <Route path='/1' element={<MoralStories/>}/>
        <Route path='/2' element={<Scheme/>}/>
        <Route path='/3' element={<Vinthalu/>}/>
        <Route path='/4' element={<Movie/>}/>
        

      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;

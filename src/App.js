
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HeaderNav from './componants/HeaderNav';
import Home from './componants/Home';

import DownloadButton from './componants/DownloadButton';
import Calendar from './componants/Calendar';
import Sidebar from './componants/Sidebar';
import './componants/sidebar.css';
import Scheme from './componants/kendrapathakalu/Scheme';
import HydTourism from './componants/hydtourism/HydTourism';
import MoralStories from './componants/moralStories/MoralStories';
import Vinthalu from './componants/prapanchavintalu/Vinthalu';




function App() {
 


  return (
    <div className="App">
      
      <BrowserRouter>
      
      <HeaderNav/>
      <div className='arrange'>
        
      <Sidebar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/pradeshalu' element={<HydTourism/>}/>
        <Route path='/' element={<Calendar/>}/>
        <Route path='/moralstory' element={<MoralStories/>}/>
        <Route path='/scheme' element={<Scheme/>}/>
        <Route path='/vinthalu' element={<Vinthalu/>}/>
        

      </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

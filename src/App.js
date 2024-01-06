
import './App.css';
import {Route,Routes,useLocation } from 'react-router-dom';
import HeaderNav from './componants/HeaderNav';
import Home from './componants/Home';
import DownloadButton from './componants/DownloadButton';
import Calendar from './componants/Calendar';
import Sidebar from './componants/Sidebar';
import Vinthalu from './componants/prapanchavintalu/Vinthalu'






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

       
        <Route path='/' element={<Home/>}/>

       <Route path='/vinthalu' element={<Vinthalu/>}/>
        
        <Route path='/111' element={<Calendar/>}/>
       
      
        


        

      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;

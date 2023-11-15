
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HeaderNav from './componants/HeaderNav';
import Home from './componants/Home';
import './componants/Headernav.css';
import DownloadButton from './componants/DownloadButton';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

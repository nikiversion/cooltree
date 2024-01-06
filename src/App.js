
import './App.css';
import {Route,Routes} from 'react-router-dom';
import HeaderNav from './componants/HeaderNav';
import Home from './componants/Home';

function App() {
 

  return (
    <div className="App">
      <HeaderNav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>


      </Routes>
     
      
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Mission from './component/Mission.jsx';
import Faq from './component/Faq.js';
import Services from './component/Services.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/add' element={<Faq/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Mission from './component/Mission.jsx';
import Faq from './component/Faq.js';
import Services from './component/Services.jsx';
import Membership from './component/Membership.jsx'
import MembershipService from './component/MembershipService.jsx';
import MembershipService1  from './component/MembershipService1.jsx';
import Calender from './component/Calender.jsx'
import Layout from './component/Layout/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/add' element={<Faq/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/membership' element={<Membership/>}/>
        <Route path='/membershipservice' element={<MembershipService/>}/>
        <Route path='/membershipservice1' element={<MembershipService1/>}/>
        <Route path='/calender' element={<Calender/>}/>
      </Routes>
      </Layout>
    
    </div>
  );
}

export default App;

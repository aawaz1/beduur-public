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
import Calender from './component/Calender.jsx';
import Ebook from './component/Ebook.jsx';
import Contact from './component/Contact.jsx';
import LoginForm from './component/LoginForm.jsx';
import AdminScreen1 from './component/Admin.jsx';
import AdminScreen2 from './component/Admin1.jsx';
import AdminScreen3 from './component/Admin2.jsx';
import AdminScreen4 from './component/Admin3.jsx';
import AdminScreen5 from './component/Admin4.jsx';
import AdminScreen6 from './component/Admin5.jsx';
import AdminScreen7 from './component/Admin6.jsx';
import AdminScreen8 from './component/Admin7.jsx';
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
        <Route path='/ebook' element={<Ebook/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin1' element={<AdminScreen1/>}/>
        <Route path='/admin2' element={<AdminScreen2/>}/>
        <Route path='/admin3' element={<AdminScreen3/>}/>
        <Route path='/admin4' element={<AdminScreen4/>}/>
        <Route path='/admin6' element={<AdminScreen5/>}/>
        <Route path='/admin7' element={<AdminScreen6/>}/>
        <Route path='/admin8' element={<AdminScreen7/>}/>
        <Route path='/admin9' element={<AdminScreen8/>}/>

        
      </Routes>
      </Layout>
      <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

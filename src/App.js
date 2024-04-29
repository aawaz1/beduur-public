import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Mission from './component/Mission.jsx';
import Faq from './component/Faq.js';
import Services from './component/Services.jsx';
import Membership from './component/Membership.jsx'
import MembershipService from './component/MembershipService.jsx';
import MembershipService1 from './component/MembershipService1.jsx';
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
import { Login } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
      <Routes>
        <Route exact path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/about' element={
          <Layout>
            <About />
          </Layout>
        } />
        {/* <Route path='/mission' element={<Mission />} /> */}
        {/* <Route path='/add' element={<Faq />} /> */}
        <Route path='/services' element={
          <Layout>
            <Services />
          </Layout>
        } />
        <Route path='/membership' element={
          <Layout>
            <Membership />
          </Layout>
        } />
        <Route path='/membershipservice' element={
          <Layout>
            <MembershipService />
          </Layout>
        } />
        <Route path='/membershipservice1' element={
          <Layout>
            <MembershipService1 />
          </Layout>
        } />
        <Route path='/calender' element={
          <Layout>
            <Calender />
          </Layout>
        } />
        <Route path='/ebook' element={
          <Layout>
            <Ebook />
          </Layout>
        } />
        <Route path='/contact' element={
          <Layout>
            <Contact />
          </Layout>
        }/>
        <Route path='/admin1' element={<AdminScreen1 />} />
        <Route path='/admin2' element={<AdminScreen2 />} />
        <Route path='/admin3' element={<AdminScreen3 />} />
        <Route path='/admin4' element={<AdminScreen4 />} />
        <Route path='/admin6' element={<AdminScreen5 />} />
        <Route path='/admin7' element={<AdminScreen6 />} />
        <Route path='/admin8' element={<AdminScreen7 />} />
        <Route path='/admin9' element={<AdminScreen8 />} />
        <Route path='/login' element={
          
         <LoginForm/>
        } />


      </Routes>
      {/* </Layout> */}
      <Routes>

      </Routes>

    </div>
  );
}

export default App;

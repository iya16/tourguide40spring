import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Hotel from './components/usercomponent/Hotel/Hotel.js';
import PackageList from './components/usercomponent/package/PackageList.js';
import Place from './components/usercomponent/place/Place.js';
import About from './components/usercomponent/about/About.js';
import Gallary from './components/usercomponent/gallary/Gallary.js'
import Booking from './components/usercomponent/booking/Booking.js';
import Body from './components/usercomponent/body/Body.js';
import Notification from './components/usercomponent/notif/Notification.js';
 import Package from './components/usercomponent/package/PackageList.js';
import LoginForm from './components/account/LoginForm.js';
import SignUpForm from './components/account/SignUpForm.js';
// import Signup from './components/signup/Signup';
// import Login from './components/login/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import Home from './components/Home';
// import Root from './Root';
// import { ToastContainer } from "react-toastify";


import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";
  
function App() {
  return (     
      <div>
        <Router> 
          <Routes>
          {/* <Root >  */}
          {/* <ToastContainer hideProgressBar={true} newestOnTop={true} /> */}
{/* 
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />   */}
                <Route path="/" element={<Body/>} />
                <Route path="/home" element={<Body/>} />
                <Route path="/place" element={<Place/>} />
                <Route path="/hotel" element={<Hotel/>} />
                <Route path="/package" element={<PackageList/>} />
                <Route path="/booking" element={<Booking/>} />
                <Route path='/gallary' element={<Gallary/>} />
                <Route path='/notification' element={<Notification/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>

          {/* </Root > */}
          </Routes>     
        
      </Router>
               
      </div>   
  );
}
export default App;
 

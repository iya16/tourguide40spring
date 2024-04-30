import React, { Component } from 'react'
import './adminsidebar.css';
import User from './user/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Package from './package/Package';
import TourGuider from './tourguider/TourGuider';
import Dashboard from './dashboard/Dashboard';
import UserAdd from './user/UserAdd';
import PackageList from './package/PackageList';

class AdminSidebar extends Component {
  render() {
    return (
    <Router>
              <div>
                <div className='adminSidebar'>
                  <div className='sidebarItem'>
                      <ul> 
                          <li><a href="/dashboard">Dashboard</a></li>
                          <li><a href="/user">User</a></li>
                          <li><a href="/tourguider">tour guider</a></li>
                          <li><a href="packages">Package</a></li>    
                          <li><a href="booked">Book</a></li>
                          <li><a href="gallary">Gallary</a></li>
                          <li><a href="connect">Communication</a></li>
                          <li><a href="">Content Management</a></li>
                          <li><a href="">Analytics and Reporting</a></li>
                      </ul>

                  </div>
                  
                </div>
                </div>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />}>  </Route>
                <Route path="/user" element={<User />} ></Route>
                <Route path="/tourguider" element={<TourGuider />}></Route>
                <Route path="/packages" element={<PackageList />} ></Route>
                <Route path='/adduser' element={<UserAdd/>} ></Route>
            </Routes>
      </Router>
    )
  }
}
export default AdminSidebar;
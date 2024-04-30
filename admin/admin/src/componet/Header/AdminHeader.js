import React, { Component } from 'react'
import  './adminHeader.css'
import logo from './logo.png'

 class AdminHeader extends Component {
  render() {
    return (
      <div className='adminHeader'>
        <div className='headerItems'>
            <div className='leftitem'>
                <img src={logo} style={{width: '100px', height: '50px', borderRadius: '50%'}} alt="" />
            </div>
            <div className='rightitem'>
                 <ul>
                    <li> <a href="">Notification</a> </li>
                    <li> <a href="">Setting</a> </li>
                 </ul>
            </div>
        </div>
        
      </div>
    )
  }
}
export default AdminHeader;
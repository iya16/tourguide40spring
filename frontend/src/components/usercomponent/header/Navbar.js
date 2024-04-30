import React, { Component } from 'react'
 import navbar from './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
       <nav className='navbar'>
         <ul className='nav-links'>
            <li>
                <a href="" className='nav-link'>Home</a>
            </li>
            <li>
                <a href="" className='nav-link'>Contact</a>
            </li>
            <li>
                <a href="" className='nav-link'>Service</a>
            </li>
            <li>
                <a href="" className='nav-link'>About</a>
            </li>
         </ul>
       </nav>
    )
  }
}


import React from "react";
import { Component } from "react";
import { BiSearch } from 'react-icons/bi';
import { FaGlobe } from 'react-icons/fa';
import  './header.css';
import LanguageSwitcher from "../../Language/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import "bootstrap-icons/font/bootstrap-icons.css";


 
class Search extends Component  {
    render(){
    return(
        <div>
              <input type="text" placeholder="Search here...." />
              {/* <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav> */}
        </div>
    )
}
    
}

class Header extends Component {

        constructor(props) {
            super(props);
            this.state = {
              scrolled: false,
              isMobileMenuOpen: false
            };
            this.handleScroll = this.handleScroll.bind(this);
            this.toggleMobileMenu = this.toggleMobileMenu.bind(this); 
          }
        
          componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
          }
        
          componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
          }
        
          handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) {
              this.setState({ scrolled: true });
            } else {
              this.setState({ scrolled: false });
            }
          }

          toggleMobileMenu() {
            this.setState(prevState => ({
                isMobileMenuOpen: !prevState.isMobileMenuOpen
            }));
        }
     
    render(){
     const { scrolled, isMobileMenuOpen } = this.state;

       return(
        <div>
            <div className={`header ${scrolled ? 'scrolled' : ''}`}>
             <div className = "menu-toggle" onClick={this.toggleMobileMenu} >

         
              </div>
                <ul id="Navbar" className={isMobileMenuOpen ? 'collapsed-menu' : ''}>

                      <li><a className="active" href="/home">Home</a></li>

                      <li><a className="" href="/place">Place</a></li>

                      <li><a className="" href="/hotel">Hotel</a></li>

                      <li><a className="" href="/package">Package</a></li>

                      <li><a className="" href="/gallary">Gallary</a></li>

                      <li><a className="" href="/booking">Book</a></li>

                      <li><a className="" href="/notification">Notification </a></li>

                      <li><a className="" href="/about">About</a></li>

                      <li><a className="" href="/logout">Logout</a></li>
                      <li><a href="/login">Login</a></li>
                      <li><a href="/signup">Signup</a></li>

                      <Search />
                      <LanguageSwitcher />
                  </ul> 
                  <div className="icons">
                      {
                         isMobileMenuOpen ? 
                         <i className="bi bi-x-lg"> </i> : <i className="bi bi-list"></i>
                       }
                  </div>
                      
                            
                 </div> 
                
                 
        </div> 
    ) 
} 
}
export default Header;

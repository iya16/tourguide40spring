import { Component } from "react";
import React from "react";
import "./footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="footerrr">
                <div className='container'>
                <div className='row'>
                    <div className='col-md-3 '>
                      <h2>Detail Contact</h2>
                            <ul>
                                <li>Mobile 1: +251 912119551</li>
                                <li>Mobile 2: +251 927830715</li>
                                <li>Office: +251 468810117</li>
                                <li>Email: info@seeusarbaminch.com</li>
                            </ul>
                    </div>
           
             
                    <div className='col-md-3'>
                       <h2>Detail Contact</h2>
                            <ul>
                                <li>Mobile 1: +251 912119551</li>
                                <li>Mobile 2: +251 927830715</li>
                                <li>Office: +251 468810117</li>
                                <li>Email: info@seeusarbaminch.com</li>
                            </ul>
                    </div>
               
                
                 <div className='col-md-3'>
                     <h2>Detail Contact</h2>
                        <ul className="list-unstyled">
                            <li>Mobile 1: +251 912119551</li>
                            <li>Mobile 2: +251 927830715</li>
                            <li>Office: +251 468810117</li>
                            <li>Email: info@seeusarbaminch.com</li>
                        </ul>
                    </div>
             </div> 
             <div>
                <label htmlFor="">comment</label>
                <input type="text" />
             </div>
         </div>
         </div>
        );
    }
}
export default Footer;

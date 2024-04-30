import React, { Component } from 'react';
import './adduser.css';

class UserAdd extends Component {
  render() {
    return (
      <div className='adduser'>
        <h1>Add User</h1>
        <div className='adduserform'>
            <form action="" >
                <div className='col'>
                    <label htmlFor="">Full Name</label>
                    <input type="text"  placeholder='first name'/>
                    <input type="text" placeholder='last name'/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email"   placeholder='email' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text"  placeholder='password'/>
                </div>
                <div>
                    <label htmlFor="">Nationality</label>
                    <input type="text" placeholder='nationality' />
                </div>
            </form>
            <button type='submit' className='btn btn-primary'>Add</button>
        </div>
        
      </div>
    )
  }
}
export default UserAdd;

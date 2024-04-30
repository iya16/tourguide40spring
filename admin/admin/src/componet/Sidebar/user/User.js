import React, { Component } from 'react';
import './user.css';
class User extends Component {
  render() {
    return (
      <div>
         <div className='usertable'>
            <div className='userhead'>
                <h1 className='text-center'>User Information</h1>
                <h1><a href="/adduser">+ Add</a></h1>
            </div>
            <table className='table '>
                <tr className='table-active'>
                   <th style={{padding: '5px'}}>Id</th>
                   <th>Full Name</th>
                   <th>Gmail</th>
                   <th>Password</th>
                   <th><button style={{padding: 0}}  type="button" className='btn btn-danger'>Delete</button></th>
                   <th><button style={{padding: 0}}   type="button" className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}   type="button" className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}   type="button" className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}   className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}}  className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}}  className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Abebe Simon</td>
                    <td>abebesimon@gmail.com</td>
                    <td>abebeSimon@gmail.com</td>
                    <th><button style={{padding: 0}} className='btn btn-danger'>Delete</button></th>
                    <th><button style={{padding: 0}} className='btn btn-primary'>Update</button></th>
                </tr>

            </table>
        </div>
        
      </div>
    )
  }
}
export default User;

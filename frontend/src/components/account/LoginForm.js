import React, { useState } from 'react'; 
import './LoginForm.css'; // Import the CSS file 
import emailIcon from './Assets/email.png'; 
import lockIcon from './Assets/lock.png'; 
 
const LoginForm = () => { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
 
  const handleEmailChange = (e) => { 
    setEmail(e.target.value); 
  }; 
 
  const handlePasswordChange = (e) => { 
    setPassword(e.target.value); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Here you can perform login validation 
    // For simplicity, let's just check if the email and password match 
    if (email === 'example@gmail.com' && password === 'password') { 
      // Successful login 
      setError(''); 
      console.log('Login successful'); 
    } else { 
      // Invalid credentials 
      setError('Invalid email or password'); 
    } 
  }; 
 
  const handleForgotPassword = () => { 
    // Handle the action when "Forgot Password" link is clicked 
    console.log('Forgot Password clicked'); 
  }; 
 
  return ( 
    <div className="login"> 
      <h2>Login</h2> 
      <form onSubmit={handleSubmit}> 
        <div> 
          <label htmlFor="email"> 
            <img src={emailIcon} alt="Email Icon" /> 
          </label> 
          <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Email Address" 
          /> 
        </div> 
        <div> 
          <label htmlFor="password"> 
            <img src={lockIcon} alt="Lock Icon" /> 
          </label> 
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Password" 
          /> 
        </div> 
        {error && <p className="error-text">{error}</p>} 
        <div className="forgot-password"> 
          <span>Forgot Password? </span> 
          <a href="#" onClick={handleForgotPassword}>Click here</a> 
        </div> 
        <button type="submit">Login</button> 
      </form> 
    </div> 
  ); 
}; 
 
export default LoginForm;
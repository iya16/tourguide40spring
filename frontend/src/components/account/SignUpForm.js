import React, { useState } from "react";
import "./SignUpForm.css"; // Import the CSS file
import userIcon from "./Assets/user.png";
import emailIcon from "./Assets/email.png";
import lockIcon from "./Assets/lock.png";
import hidePasswordIcon from "./Assets/hide.png";
import showPasswordIcon from "./Assets/show.png";
import axios from "axios";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerificationField, setShowVerificationField] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  //here is the database begging place on other thing boy dont confused
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    nationality: "",
  });

  const changeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/signup/",
        formData
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Failed to register:", error.response.data);
    }
  };

  /////////////////////////////////////////////////
  const combinedSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e); // Call the first function
    addSubmit(e); // Call the second function
  };

  const handleEmailChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  const handleEmailFocus = () => {
    if (!email.includes("@")) {
      setEmail(email + "@gmail.com");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!isStrongPassword(value)) {
      setPasswordError("Please use a strong password"); // Set error message if password is not strong
    } else {
      setPasswordError(""); // Clear error message if password is strong
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showVerificationField) {
      // Send verification code via email or SMS
      // For simplicity, let's generate a random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000);
      setVerificationCode(code);
      setShowVerificationField(true);
    } else {
      // Verify the entered code
      if (e.target.verification.value === verificationCode.toString()) {
        console.log("Verification successful");
        // Perform further actions like user registration
      } else {
        console.log("Verification code is incorrect");
        // Display error message for incorrect verification code
      }
    }
  };

  // Function to check if password meets strong password requirements
  const isStrongPassword = (value) => {
    // Example: Check if password contains at least one digit, one uppercase letter, one lowercase letter, and one special character
    const strongPasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/|<>~`\-=\[\]\\])[\w!@#$%^&*()_+}{"':;?/|<>~`\-=\[\]\\]{8,}$/;
    return strongPasswordRegex.test(value);
  };

  return (
    <div className="signup" style={{marginTop:'50px'}}>
      <h2>Sign Up</h2>
      <form onSubmit={combinedSubmit}>
        <div>
          <label htmlFor="fullName">
            <img style={{width:'10px', height: '10px'}} src={userIcon} alt="User Icon" />
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              changeChange(e);
            }}
            placeholder="Full Name"
            // onChange={}
          />
        </div>
        <div>
          <label htmlFor="email">
            <img style={{width:'10px', height: '10px'}} src={emailIcon} alt="Email Icon" />
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="password">
            <img style={{width:'10px', height: '10px'}} src={lockIcon} alt="Lock Icon" />
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? "error" : ""}
            placeholder="Password (Use symbols, letters, numbers, etc. Min 8 characters)"
          />
          <img style={{width:'10px', height: '10px'}}
            src={passwordVisible ? hidePasswordIcon : showPasswordIcon}
            alt="Toggle Password Visibility"
            className="toggle-password-icon"
            onClick={togglePasswordVisibility}
          />
          {passwordError && <p className="error-text">{passwordError}</p>}{" "}
          {/* Display error message if password is not strong */}
        </div>
        <div>
          <label htmlFor="confirmPassword">
            <img style={{width:'10px', height: '10px'}} src={lockIcon} alt="Lock Icon" />
          </label>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            className={!passwordsMatch ? "error" : ""}
          />
          <img style={{width:'10px', height: '10px'}}
            src={confirmPasswordVisible ? hidePasswordIcon : showPasswordIcon}
            alt="Toggle Confirm Password Visibility"
            className="toggle-password-icon"
            onClick={toggleConfirmPasswordVisibility}
          />
          {!passwordsMatch && (
            <p className="error-text">Passwords do not match</p>
          )}
        </div>
        {/* {showVerificationField ? (
          <div>
            <label htmlFor="verification">Verification Code:</label>
            <input type="text" id="verification" name="verification" />
          </div>
        ) : null}
        <button type="submit">
          {showVerificationField ? "Verify" : "Sign Up"}
        </button> */}
      </form>
    </div>
  );
};

export default SignUpForm;

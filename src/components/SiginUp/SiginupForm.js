
import React, { useState } from "react";
import "../../styles.css";

import { Link,redirect,useNavigate } from 'react-router-dom';
import img1 from '../../image/99-logo.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SiginUp = () => {
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);
 
  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log({ email, username, tel, password });
      setEmail("");
      setFirstName("");
      setLastName("");
    
  };
 
  

    const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleToggleVisibility = () => {
  setShowPassword((prevState) => !prevState);
};


const handlePasswordChange2 = (e) => {
  setPassword2(e.target.value);
};

const handleToggleVisibility2 = () => {
  setShowPassword2((prevState) => !prevState);
};
  return (
    <div>
     
    <form className="Auth-form-siginup-page" onSubmit={handleSubmit}>
<h5 className="h5">Hi, Wellcome to OTO!</h5>
        <div className="form-group text-left-form">
            <label className="form-lable-signup">First Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" 
           value={firstname} onChange={(e)=>setFirstName(e.target.value)} required />
        </div>
          <div className="form-group text-left-form">
            <label className="form-lable-signup" value={lastname} onChange={(e) => setLastName(e.target.value)}>Last Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group text-left-form">
            <label className="form-lable-signup">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
       
       
       
        <div className="form-group text-left-form">
        <label> Password</label>
               <div className='input-group ' id='password-siginup-fileds' >
        <input
          className='form-control'
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="eye-button-sigin" onClick={handleToggleVisibility} style={{marginRight:"-2px"}}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <p className="text-muted-reset" id="text-for-password">Password must be at least <span className='label'>8 Characters</span> and must contain at least a <span className='label'>Capital Letter</span> and a <span className='label'>Number</span> and a <span className='label'>Special Character.</span></p>  
</div>
<div className="form-group text-left-form">
        <label>Confirm Password</label>
               <div className='input-group ' >
        <input
          className='form-control'
          type={showPassword2 ? 'text' : 'password'}
          id="password"
          value={password2}
          onChange={handlePasswordChange2}
        />
        <button className="eye-button-sigin" onClick={handleToggleVisibility2} style={{marginRight:"-2px"}}>
          {showPassword2 ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    
</div>
<div className="checkbox-data">
<input type="checkbox"/>
<span className="term-condition-signup">Terms & Conditions.</span>
 </div>
<div className="d-grid gap-2 mt-3 text-left-form">
<button type="submit" className="login-button">
 Sign In
</button>
</div>

<div className="text-center_bottom">
Already have an account?
<span className="link-primary " >
<Link to='/'>Login</Link>
</span>
</div>
    </form>

<div className="copyright-text-signup1">
<small style={{fontSize:"10px"}}>Copyright @ 2023 99tec`hinologies. All rights reserved</small>
</div>
</div>
  
  )
}

export default SiginUp

import React, { useState } from "react";
import "../../styles.css";

import { Link,useNavigate } from 'react-router-dom';
import img1 from '../../image/99-logo.png'


const SiginUp = () => {
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordfileds, setPasswordFileds]= useState("");
  const navigate = useNavigate();
  const [password, setPasswordValue] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log({ email, username, tel, password });
      setEmail("");
      setFirstName("");
      setLastName("");
      setPasswordFileds("");
  };
  const gotoLoginPage = () => navigate("/LoginPage");
  
    
    const onPasswordChange = (e) => {
      setPasswordInput(e.target.value);
    };
    const toggle = () => {
      if (password === "password") {
        setPasswordValue("text");
        return;
      }
      setPasswordValue("password");
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
            <label className="form-lable-signup">Password</label>
            <input type="password" className="form-control" id="password" value={passwordfileds} onChange={(e)=>setPasswordFileds(e.target.value)} placeholder="Enter your password" required />
<div className='eye-button-tag1'>
<button className=" eye-button-button" onClick={toggle}>
{password === "password" ? (
<svg
width="20"
height="17"
fill="currentColor"
className="bi bi-eye-slash-fill"
viewBox="0 0 16 16"
>
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
</svg>
) : (
<svg
width="20"
height="17"
fill="currentColor"
className="bi bi-eye-fill"
viewBox="0 0 16 16"
>
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
</svg>
)}
</button>


</div>
<p className="text-muted-reset" id="text-for-password">Password must be at least <span className='label'>8 Characters</span> and must contain at least <br></br>a <span className='label'>Capital Letter</span> and a <span className='label'>Number</span> and a <span className='label'>Special Character.</span></p>  
</div>
        <div className="form-group text-left-form">
            <label className="form-lable-signup">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" placeholder="Confirm your password" required />
<div className='eye-button-tag1'>
<button className=" eye-button-button" onClick={toggle}>
{password === "password" ? (
<svg
width="20"
height="17"
fill="currentColor"
className="bi bi-eye-slash-fill"
viewBox="0 0 16 16"
>
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
</svg>
) : (
<svg
width="20"
height="17"
fill="currentColor"
className="bi bi-eye-fill"
viewBox="0 0 16 16"
>
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
</svg>
)}
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
<span className="link-primary " onClick={gotoLoginPage}>
<Link to='/LoginPage'>Login</Link>
</span>
</div>
    </form>

<div className="copyright-text-signup1">
<small >Copyright @ 2023 99tec`hinologies. All rights reserved</small>
</div>
</div>
  
  )
}

export default SiginUp
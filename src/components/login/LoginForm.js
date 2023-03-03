import React, { useState } from "react";
import "../../styles.css";
import ForgetEmail from "./ForgetEmail";
import { Link } from 'react-router-dom';
// import { BiCheckCircleFill } from 'react-icons/bi';
  
import img1 from '../../image/99-logo.png'

export const LoginForm = () => {
  let [authMode, setAuthMode] = useState("signin")

  //state for the register
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [email, setEmail] = useState('');
const [passwordRegister, setPasswordRegister] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');


const [password, setPasswordValue] = React.useState("password");
const [passwordInput, setPasswordInput] = React.useState("");

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

  //handle all the form input fileds
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
   
    };
 ///handle lastname
 const handleLastName =(e) => {
  setLastName(e.target.value);
 
 }
///handle email
const handleEmail = (e) => {
  setEmail(e.target.value);
 
}
//handle password
const handlePassword = (e) => {
  setPasswordRegister(e.target.value);
 
}
//handle confirmpassword
const handleConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
 
}
 const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }




  if (authMode === "signin") {
    return (
      <div className="container-fluid">
         <div className='background-img-data'>
        
       
        <form className="Auth-form-login">
          <div className="Auth-form-content">
            <h4 className="Auth-form-title">Hi, Welcome to OTO!</h4>
            
            
            <div className="form-group text-left">
              <label>Email address</label>
              <input
               
                className="form-control email-lable"
                placeholder="abc@xyz.com"
               
              />
            </div>
          
                <div className="password-lable">
                <label>Password</label>
              
             
            <div className="input-group form-group-pass"> 
              <input
              
              type={password}
              onChange={onPasswordChange}
              value={passwordInput}
              placeholder="*******"
              name="password"
              className="form-control"
            />
            
      <button className="eye-button" onClick={toggle}>
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


            <div className="text-center_Forget">
            <a href="#" className="btn btn-link text-decoration-none" onClick={changeAuthMode}>Forgot Your Password?</a>
            </div>
            <div className="checkbox">
            <input type="checkbox"/>
            <span className="rem">Remember me</span>
            </div>
            <div className="d-grid gap-2 mt-3 ">
              <button type="submit" className="submit-login">
                Login
              </button>
            </div>
            <div className="under-text">
            Didn’t have an account?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
        <div className="copyright-text">
        <small >Copyright @ 2023 99techinologies. All rights reserved</small>
        </div>
        </div>
      </div>
    )
  }


  return (
//     <div className="container-fluid">
//       <form className="Auth-form-siginup">
//         <div className="Auth-form-content">
//           <h4 className="Auth-form-title-Register">Hi, Welcome to OTO!</h4>

//          <div className="form-group text-left">
//             <label>First Name</label>
//             <div className="form-lable">
//             <input
//               onChange={handleFirstName}
//               type="text"
//               className="form-control mt-1 "
//               placeholder="e.g Jane Doe"
//               value={firstname}
//             />
//             </div>
//           </div>
//           <div className="form-group mt-3 text-left">
//             <label>Last Name</label>
//             <div className="form-lable">
//             <input
//               onChange={handleLastName}
//               type="text"
//               className="form-control mt-1 "
//               placeholder="e.g Jane Doe"
//               value={lastname}
//             />
//             </div>
//           </div>
//           <div className="form-group mt-3 text-left">
//             <label>Email address</label>
//             <div className="form-lable">
//             <input
//               onChange={handleEmail}
//               type="email"
//               className="form-control mt-1 "
//               placeholder="abc@xyz.com"
//               value={email}
//             />
             
        
//             </div>
//           </div>
//           <div className="form-group mt-3 text-left ">
//             <label>Password</label>
        
//              <div className="input-group"> 
//               <input
              
//               type={password}
//               onChange={onPasswordChange}
//               value={passwordInput}
//               placeholder="Enter password"
//               name="password"
//               className="form-control"
//             />
//        <button className="eye-button" onClick={toggle}>
//         {password === "password" ? (
//           <svg
//             width="20"
//             height="17"
//             fill="currentColor"
//             className="bi bi-eye-slash-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
//             <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
//           </svg>
//         ) : (
//           <svg
//             width="20"
//             height="17"
//             fill="currentColor"
//             className="bi bi-eye-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
//             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
//           </svg>
//         )}
//       </button>
        
//             </div>
//             <p className="text-muted-reset">Password must be at least <span className='label'>8 Characters</span> and must contain at least <br></br>a <span className='label'>Capital Letter</span> and a <span className='label'>Number</span> and a <span className='label'>Special Character.</span></p>  
//           </div>
//           <div className="form-group mt-3 text-left">
//             <label>Confirm Password</label>
       
//              <div className="input-group "> 
//               <input
              
//               type={password}
//               onChange={onPasswordChange}
//               value={passwordInput}
//               placeholder="Enter password"
//               name="password"
//               className="form-control "
//             />
// {/* 
// <div className="input-group-append">
//   <span className="input-group-text">
//     <BiCheckCircleFill className="text-success" />
//   </span>
// </div> */}
//       <button className="eye-button" onClick={toggle}>
//         {password === "password" ? (
//           <svg
//             width="20"
//             height="17"
//             fill="currentColor"
//             className="bi bi-eye-slash-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
//             <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
//           </svg>
//         ) : (
//           <svg
//             width="20"
//             height="17"
//             fill="currentColor"
//             className="bi bi-eye-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
//             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
//           </svg>
//         )}
//       </button>
        
          
//           </div>
//           <div className="checkbox2">
//             <input type="checkbox"/>
//             <span className="term-condition">Terms & Conditions.</span>
//             </div>
//           <div className="d-grid gap-2 mt-3 text-left">
//             <button type="submit" className="login-button">
//              Sign In
//             </button>
//             </div>
//           </div>
          
//           <div className="text-center_bottom">
//             Already registered?{" "}
//             <span className="link-primary " onClick={changeAuthMode}>
//               Login
//             </span>
//           </div>
//         </div>
//       </form>
     
       
    
//     </div>
<div className="container">
  
		<div className="row justify-content-center">
    
			<div className="col-lg-6 col-md-8 col-sm-10">
     
				<form className="Auth-form-siginup">
        <h5 className="h5">Hi, Wellcome to OTO!</h5>
					<div className="form-group text-left-form">
						<label className="form-lable-signup">First Name</label>
						<input type="text" className="form-control" id="name" placeholder="Enter your name" required />
					</div>
          <div className="form-group text-left-form">
						<label className="form-lable-signup">Last Name</label>
						<input type="text" className="form-control" id="name" placeholder="Enter your name" required />
					</div>
          
					<div className="form-group text-left-form">
						<label className="form-lable-signup">Email address</label>
						<input type="email" className="form-control" id="email" placeholder="Enter your email" required />
					</div>
					<div className="form-group text-left-form">
						<label className="form-lable-signup">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            <div className='eye-button-tag'>
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
            <div className='eye-button-tag'>
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
          <div className="checkbox3">
            <input type="checkbox"/>
            <span className="term-condition-signup">Terms & Conditions.</span>
             </div>
          <div className="d-grid gap-2 mt-3 text-left-form">
           <button type="submit" className="login-button">
             Sign In
            </button>
            </div>
         
          <div className="text-center_bottom">
            Already have an account?{" "}
            <span className="link-primary " onClick={changeAuthMode}>
              Login
            </span>
           </div>
				</form>
			</div>
		</div>
    <div className="copyright-text-signup">
        <small >Copyright @ 2023 99techinologies. All rights reserved</small>
        </div>
	</div>
  )
}

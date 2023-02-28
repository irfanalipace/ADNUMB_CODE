import React from 'react'
import img from '../../image/Login_img.jpg'
import "../../styles.css";
import LoginImage from './LoginImage';
const ResetEmail = () => {
  return (
    <div className="container-fluid">
      <div className="row">  
      <div className="col-md-6 d-none d-sm-block">   
      {/* <div className="background-image1">    
      <img src={img} />
     
      </div> */}
       <LoginImage />
    </div>
   
    
    <div className="col-md-6 form-content">
    <form className="Auth-form-reset">
   <h5 className="Auth-form-heading text-left"> Make a New Password</h5>
 
          <div className="form-group mt-3 text-left ">
            <label>Email address</label>
            <input
              type="email"
              className="form-control form-control-rest "
              placeholder="abc@xyz.com"
            />
          </div>
          <div className="form-group mt-3 text-left">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-rest"
              placeholder="*******"
            />
           
          </div>
          <div className="form-group mt-3 text-left">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control form-control-rest "
              placeholder="*******"
            />
          </div>
         
          <div className="d-grid gap-2 mt-3 text-left">
            <button type="submit" className="reset-login">
           Submit
            </button>
          </div>
          </form>
        </div>
        
        </div>
      
  </div>

  )
}

export default ResetEmail
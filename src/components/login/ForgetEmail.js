import React from 'react'
import img from '../../image/Group-19.png'
import "../../styles.css";
import LoginImage from './LoginImage';
const ForgetEmail = () => {
  return (
    <div className="container-fluid">
    <div className="row">  
    <div className="col-md-6 d-none d-sm-block">   
    {/* <div className="background-image1">    
    <img src={img} />
   
    </div> */}
     <LoginImage />
  </div>
    
         <div className="col-md-6 top_margin">
        
          <form className='Auth-form-forget'>
        
       
          <h4 className='resetpass'>Reset your Password</h4>
          
          <div className="form-group mt-3 text-left ">
            <label>Enter your email address</label>
            <input
              type="email"
              className="form-control forget-email-lable"
              placeholder="abc@xyz.com"
            />
          </div>
            <div className="d-grid gap-2 mt-3 text-left">
            <button type="button" className="forget-email">
            Reset
            </button>
          </div>
          </form>
    </div>
    
  </div>
  <div className="copyright-text-forget">
        <small >Copyright @ 2023 99techinologies. All rights reserved</small>
        </div>
  </div>
  )
}

export default ForgetEmail
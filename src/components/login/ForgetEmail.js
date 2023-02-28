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
          <h4 className='resetPass'>Reset your Password</h4>
         <div className="form-group mt-3 text-left form-control-forget-email">
              <label >Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="abc@xyz.com"
              />
            </div>
            <div className="d-grid gap-2 mt-3 text-left">
            <button type="button" className="forget-email">
            Send Password Reset Link
            </button>
          </div>
          </form>
    </div>
    
  </div>
  </div>
  )
}

export default ForgetEmail
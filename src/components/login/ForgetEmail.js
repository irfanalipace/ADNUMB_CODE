import React from 'react'
import img from '../../image/Group-19.png'
import "../../styles.css";
import LoginImage from './LoginImage';
import img1 from '../../image/99-logo.png'
const ForgetEmail = () => {
  return (
    <div className="container-fluid">
      <div className="row">  

      <div className="col-md-6 col-xl-6 d-none d-sm-block ">   
     
      <div id="grad-login-reset-mail">
      <div className='background-image-img1'>
          <div className='text-white text-center small-logo'>
              { <img src={img1} /> }
              <h4>
                <strong>
                The Operating System that <br></br>
                that's means business
                </strong>
              </h4>
              <p> 
                seamlessly Manage all your Omnichannel <br>
              </br>
              commerce, Marketing, Payment and Bussiness 
              <br></br>Intelligence oprators
              </p>
          </div>
        </div>
       </div>
      
       </div>
   
    
    <div className="col-md-6 col-xl-6 col-sm-12">
    <form className="Auth-form-login">
          <div className="Auth-form-content1">
            <h4 className="Auth-form-title">Reset your Password</h4>
            
            
            <div className="form-group text-left text-reset-email">
						<label className="form-lable-signup">Enter email address</label>
						<input type="email" className="form-control" id="email" placeholder="abc@xyz.com" required />
					</div>
      
            
          
            <div className="d-grid gap-2 mt-3 ">
              <button type="submit" className="submit-login">
               Reset
              </button>
            </div>
         
          </div>
        </form>
     
        <h6 className='copyright-text-copyright'>Copyright @ 2023 99techinologies. All rights reserved</h6>

     
      </div>
        </div>
       </div>
  )
}

export default ForgetEmail
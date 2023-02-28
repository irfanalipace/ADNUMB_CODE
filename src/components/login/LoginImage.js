import React from 'react'
// import img from '../../image/Login_img.png'
import img1 from '../../image/99-logo.png'
import "../../styles.css";
const LoginImage = () => {

  return (
    <div className='container-fluid'>
       <div className='row'>
    <div id="grad-login">
       
        <div className='background-image-img'>
          <div className='text-white text-center small-logo'>
              <img src={img1} />
              <h4>
                <strong>
                The Operatung System that <br></br>
                that's mean business
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
       </div>
  )
}

export default LoginImage
import React from 'react'
import { LoginForm } from './login/LoginForm'
import LoginImage from './login/LoginImage'
// import img1 from '../image/99-logo.jpeg'

const LoginPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-6 col-xl-6 d-none d-sm-block ">  
     
          <LoginImage />
        </div>
        <div className="col-md-6 col-xl-6 col-sm-12">
           
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
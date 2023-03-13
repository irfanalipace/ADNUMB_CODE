import React from 'react'

import LoginImage from './login/LoginImage'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import SiginupForm from './SiginUp/SiginupForm'

export const RegisterPage = () => {
 

  
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-6 col-xl-6 d-none d-sm-block ">  
   
        <LoginImage />
      </div>
      <div className="col-md-6 col-xl-6 col-sm-12">
         
      <SiginupForm />
      </div>
    </div>
  </div>
  )
}
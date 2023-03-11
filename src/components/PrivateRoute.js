import React from 'react';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Dashboard from './login/Dashboard';
import ForgetEmail from './login/ForgetEmail';
import ResetEmail from './login/ResetEmail';

import LoginPage from './LoginPage';
import { RegisterPage } from './RegisterPage';


function PrivateRoute() {
  
  return (
 
    // ...
    
        <BrowserRouter>
          <Routes>
            <Route path="/LoginPage" element={<LoginPage />} exact/>
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/ResetEmail" element={<ResetEmail />} exact/>
            <Route path="/ForgetEmail" element={<ForgetEmail />} />
            <Route path="/Dashboard" element={<Dashboard />} exact/>
          
          </Routes>
        </BrowserRouter>
  );
}

export default PrivateRoute;

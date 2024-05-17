import React from 'react';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Layout from '../Layout';

import Home from './home/Home';



function PrivateRoute() {
  
  return (
 
    // ...
    
        <BrowserRouter>
        <Layout>
          <Routes>
   

            <Route path="/" element={<Home />} />
          </Routes>
          </Layout>
        </BrowserRouter>
  );
}

export default PrivateRoute;

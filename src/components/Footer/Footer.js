import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="footer-website-data">
      <div className="div-data-footer">
        <div className="div">
          <span style={{ color: "#FFB400" }}>Reg4 </span>
          <span style={{ color: "white" }}>Plates</span>
        </div>
      </div>
      <div className="plats-footer-page">
        <p>
          At Reg4 Plates we produce high quality number plates made from premium
          materials.
        </p>
      </div>
      <footer className="footer">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-menu-items d-flex ">
              <ul className="list-unstyled d-flex m-0 p-0">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Number Plate Maker</a>
                </li>
                <li>
                  <a href="#">Show Plates</a>
                </li>
                <li>
                  <a href="#">Motorcycle Plates</a>
                </li>
                <li>
                  <a href="#">4D Number Plates</a>
                </li>
                <li>
                  <a href="#">3D Gel Plates</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
           
              </ul>
            
            </div>
            <div className="footer-menu-items d-flex ">
            <ul className="list-unstyled d-flex m-0 p-0">
            
            
            <li>
              <a href="#">4D Number Plates</a>
            </li>
            <li>
              <a href="#">3D Gel Plates</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
       
          </ul>
            </div>
           
            <div className="row">
         <div className="col-md-4">
         <p className="m-0" style={{fontSize:'', color:'white'}}>Copyright ©2024 Reg4 Plates. All Rights Reserved.</p>
         </div>
              <div className="col-md-8">
                <div className='footer-menu-items-dev-data d-flex justify-content-end align-items-center footer-menu-items-list-media'>
              
                  <ul className="footer-menu-items-dev-data d-flex m-0 p-0">
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                  </ul>
                 
                </div>
            
            </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

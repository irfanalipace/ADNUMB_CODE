import React, { useState } from "react";
import "./Home.css";
import english from "../../assets/image 2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp, faYoutube, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
const Home = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    customer: "",
    itemName: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Invoice data:", invoiceData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="invoice-form">
            <p>
              <span className="span-form-lable-data">
                Create your Plate Now!{" "}
                <span style={{ color: "black" }}>Enter your Reg.</span>
              </span>
            </p>
            <h2 className="data-layer-viewport">BD51 SMR</h2>

            <button className="name-data-images-data">Standard</button>

            <button className="name-data-images-data-p">4D Plate</button>

            <button className="name-data-images-data-p">
              <span
            
                className="data-4rd-plats"
              >
                {" "}
                3D Plate
              </span>
            </button>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="input-field">
                    <label>Car</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Customer Plats</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-field ">
                    <label>Font Rear</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Customer Plats</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field ">
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                      style={{ marginTop: "36px" }}
                    >
                      <option value="">Font Rears</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-field ">
                    <label>Font Size</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Font Size</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-field ">
                    <label>Rear Size</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Rear Size</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-field ">
                    <label>Font Border</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Font Border</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field ">
                    <label>Font Border</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Font Border</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-field ">
                    <label>Badge</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">Font Border</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field ">
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                      style={{ marginTop: "36px" }}
                    >
                      <option value="">None</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="input-field ">
                    <label>Bottom Line</label>
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                    >
                      <option value="">None</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field ">
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                      style={{ marginTop: "36px" }}
                    >
                      <option value="">Black</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field ">
                    <select
                      name="customer"
                      value={invoiceData.customer}
                      onChange={handleChange}
                      style={{ marginTop: "36px" }}
                    >
                      <option value="">Std Size</option>
                      <option value="Customer 1">Customer 1</option>
                      <option value="Customer 2">Customer 2</option>
                      <option value="Customer 3">Customer 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="heading-data-plats">
            <h3>High Quality UK Show Plates and Number Plates.</h3>
            <p>
              Show Plates World produce high quality number plates made from
              premium materials with a beautiful finish.
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="emrting-viewpop">
                  <img src={english} alt="" style={{ background: "#24a0ed" }} />
                  <span>BD51 SMR</span>
                </div>
                <div
                  className="emrting-viewpop"
                  style={{ marginTop: "23px", background: "#FFB400" }}
                >
                  <img src={english} alt="" style={{ background: "#24a0ed" }} />
                  <span>BD51 SMR</span>
                </div>
              </div>

              <div style={{ marginTop: "16px", textAlign: "justify" }}>
                <input type="checkbox" id="checkbox" className="checkbox" />
                <label
                  htmlFor="checkbox"
                  className="checkbox-label"
                  style={{ marginLeft: "12px" }}
                >
                  <span className="checkbox-custom"></span>
                  Add a fitting kit for only £3.99
                </label>
              </div>
         
              <div style={{ marginTop: "16px", textAlign: "justify" }}>
                <label
                  htmlFor="checkbox"
                  className="checkbox-label"
                  style={{ marginLeft: "12px" }}
                >
                  <span className="checkbox-custom"></span>
                  Price:<strong> £27.98</strong>
                </label>
              </div>
              <div className="data-submit">
                <button className="data-submit-form">Submit</button>
              </div>
            </div>
          </div>
          <div className='footer-menu-items-dev-data d-flex justify-content-end align-items-center footer-menu-items-list-media flex-dirctions social-media-icons-data flex-dirctions'>
              
          <ul className="footer-menu-items-dev-data d-flex m-0 p-0" style={{flexDirection:'column'}}>
          <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: '#25D366',fontSize:'40px' }} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookMessenger} size="lg" style={{color:"#0078FF", fontSize:'40px'}}/></a></li>
          
          
          </ul>
         
  
          </div>
        </div>
       
      
      </div>
    </div>
  );
};

export default Home;

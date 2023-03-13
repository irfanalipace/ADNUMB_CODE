import React, { useState, useEffect } from 'react'
import TblFunc from './TblFunc'
import Data from './Data'
import img1 from '../../image/icon/fi-file-plus.png';
import img2 from '../../image/icon/Bag.png';
import img3 from '../../image/icon/User.png';

import img4 from '../../image/icon/folder.png';
import img5 from '../../image/icon/Chat.png';
import img6 from '../../image/icon/Setting.png';
import img7 from '../../image/icon/fi-headphone.png';
import img8 from '../../image/icon/fi-gift.png';
import img9 from '../../image/icon/fi_chevron.png';
import img10 from '../../image/icon/Notification.png';
import '../../styles.css'

const Dashboard = () => {

  // const dataSet = [
  //   ["Tiger Nixon", "System Architect", "Edinburgh"],
  //   ["Garrett Winters", "Accountant", "Tokyo"],
  //   ["Ashton Cox", "Junior Technical Author", "San Francisco"]
  // ]
  const handleFileReset = () => {
    setSelectedFile(null);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleReset = () => {
    setSelectedFile(null);
  };


  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-xl-2 col-md-3 col-sm-4">

          {/* Sidebar Code is bottom */}
          <div className="sidebar">


            <button className='btn btn-success'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 16 16">
              <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
            </svg>
              {' '}{' '} Inventroy Formatter
            </button>




            <div className='menu'>

              <ul>

                <a href="#" className="active orde">
                  <span className="iconda menu-text-size"><img src={img2} alt='' />Orders</span>

                </a>


                <a href="#" className='custom'>
                  <span className="iconda menu-text-size"><img src={img3} alt='' />Customer</span>

                </a>


                <a href="#" className='inventory-me'>
                  <span className="iconda menu-text-size"><img src={img4} alt='' />Inventory</span>
                  <span className="item menu-text-size"></span>
                </a>


                <a href="#" className='conversati'>
                  <span className="iconda menu-text-size"><img src={img5} alt='' />conversation</span>
                  <span className="item menu-text-size"></span>
                </a>


                <a href="#" className='setti'>
                  <span className="iconda menu-text-size"><img src={img6} alt='' />Setting</span>
                  <span className="item menu-text-size"></span>
                </a>



              </ul>

            </div>



            <button className='btn btn-success headphone' style={{ background: 'rgba(94, 99, 102, 0.1)', 'border-radius': '10px', color: 'black', marginTop: '80%', width: '171px', marginBottom: '12px' }}>
              <img src={img7} /> Contact Support
            </button>

            <button className='btn btn-success gift-button'>
              <img src={img8} />
              {' '}free Gift Awaits You!<br></br>
              upgrade your account
              <img src={img9} />
            </button>
            <br></br>
            <button className=' button-logout'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
              logout
            </button>

          </div>

        </div>

        {/* Sidebar Code is above */}



        <div className="col-xl-10 col-md-9 col-sm-8">



          <nav className="navbar navbar-class navbar-expand-lg navbar-light bg-light">
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <a className="navbar-brand" href="#">Inventory Formatter</a>

            </div>

            <div className="col-lg-10 col-md-10 col-sm-10" style={{ textAlign: 'end' }}>
              <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nanny's shop
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>

              </div>
              {' '}
              <img src={img10} alt='' />
              {' '}

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
            </div>


          </nav>


          <div className="navbar">
            <a className="active head-data" href="#"><i className="fa fa-fw fa-home"></i> / Inventory Formatter</a>

          </div>




          <div className='content-10'>

            <div className=' import-file'>
            <div className='inventory-heading' style={{ paddingTop: '8px', paddingBottom: '8px' }}>
  Upload Inventory file
</div>

<button className={`w3-btn w3xlarge ${selectedFile ? 'hide-background' : ''}`}>
  <img style={{ marginLeft: "-17px" }} src={img1} alt='' />
  {selectedFile && <p>Selected file: {selectedFile.name}</p>}
  <div className='center' style={{ marginLeft: "44px" }}>
    <input type="file" onChange={handleFileSelect} name="file" className='custom-file-input' />
    {selectedFile && (
      <button className="btn btn-success hide-background" onClick={handleFileReset}>
        Reset
      </button>
    )}
  </div>
</button>

    
  
  

              <div className='download'>
                <p className='download-sample'>Download Sample  </p> <button className='btn  btn-success'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </button>

              </div>


            </div>








            <div className='datatable'>
              <Data />
            </div>
            
          </div>


        </div>
      </div>
    </div>



  )
}

export default Dashboard
import React from 'react'
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
import '../../styles.css'

const Dashboard = () => {

  // const dataSet = [
  //   ["Tiger Nixon", "System Architect", "Edinburgh"],
  //   ["Garrett Winters", "Accountant", "Tokyo"],
  //   ["Ashton Cox", "Junior Technical Author", "San Francisco"]
  // ]


  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 ">


          <div className="sidebar">

            <div className='formatter'>
              <button className='btn btn-success chet-inventoy'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
              </svg>
               {' '}{' '} Inventroy Formatter
              </button>

            </div>


            <div className='menu'>




            <ul>
               
                    <a href="#" className="active orders">
                        <span className="icon"><img src={img2} alt=''/></span>
                        <span className="item">Orders</span>
                    </a>
            
            
                    <a href="#" className='customer'>
                        <span className="icon"><img src={img3} alt=''/></span>
                        <span className="item">Customer</span>
                    </a>
             
               
                    <a href="#" className='inventory-menu'>
                        <span className="icon"><img src={img4} alt=''/></span>
                        <span className="item">Inventory</span>
                    </a>
             
              
                    <a href="#" className='conversation'>
                        <span className="icon"><img src={img5} alt=''/></span>
                        <span className="item">Conversation</span>
                    </a>
              
             
                    <a href="#" className='setting'>
                        <span className="icon"><img src={img6} alt=''/></span>
                        <span className="item">Setting</span>
                    </a>
             
              
              
            </ul>
      
          
          {/* <a> <img src={img3} alt=''/>Customer</a> 
          <a> <img src={img4} alt=''/>Inventory</a> 
          <a> <img src={img5} alt=''/>Conversation</a> 
          <a> <img src={img6} alt=''/>Setting</a> 
           */}
            </div>
            <div>


              <button className='btn btn-success headphone' style={{background: 'rgba(94, 99, 102, 0.1)', 'border-radius': '10px', color:'black'}}>
                <img src ={img7}/> Contact Support
              </button>

              <button className='btn btn-success gift'>
              <img src ={img8}/>
               {' '}free Gift Awaits You!
                upgrade your account
               <img src={img9} />
              </button>
             
              <button className=' button-logout'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
                logout
              </button>
            </div>

          </div>
        </div>





        <div className="col-md-10">

          <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

              <a className="navbar-brand" href="#">Inventory Formatter</a>


              <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Nanny's shop
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>


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
              <h6 className='h6-heading'>Upload Inventory file</h6>
              <div className='import-file'>


                <button className="w3-btn w3xlarge">
                  <img src={img1} alt='' />
                  {/* <i className="fa fa-file fa-icon-size fa-4x"> */}
                  <div className='center'>
                    <input type="file" name="file" className='custom-file-input' />
                  </div>
                  {/* </i> */}
                </button>

                <div className='download'>
                  <button className='btn  btn-success'>
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
    </div>



  )
}

export default Dashboard



import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import React, { useEffect, useRef } from 'react';
import '../../styles.css'
 const Data = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const $table = $(tableRef.current);
    $table.DataTable();
  }, []);

///javascript code 


  return (
   
         <div className='search-bar'>
   
         <table id="myTable" ref={tableRef} cellSpacing="0" className="table table-striped table-bordered table-sm">
  <thead>
    <tr>
      <th className="th-sm">File Name

      </th>
      <th className="th-sm">Created at

      </th>
      <th className="th-sm">User

      </th>
      <th className="th-sm">Action

      </th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td><button className="btn btn-success "><i className="fa fa-download"></i> Download</button></td>
      
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Cara Stevens</td>
      <td>Sales Assistant</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
      
    </tr>
    <tr>
      <td>Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Airi Satou</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Cara Stevens</td>
      <td>Sales Assistant</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Zenaida Frank</td>
      <td>Software Engineer</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Zorita Serrano</td>
      <td>Software Engineer</td>
      <td>San Francisco</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
      
    </tr>
    <tr>
      <td>Cara Stevens</td>
      <td>Sales Assistant</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Jennifer Acosta</td>
      <td>Junior Javascript Developer</td>
      <td>Edinburgh</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    </tr>
    <tr>
      <td>Cara Stevens</td>
      <td>Sales Assistant</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Hermione Butler</td>
      <td>Regional Director</td>
      <td>London</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Donna Snider</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Lael Greer</td>
      <td>Systems Administrator</td>
      <td>London</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Jonas Alexander</td>
      <td>Developer</td>
      <td>San Francisco</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
      
    </tr>
    <tr>
      <td>Donna Snider</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Shad Decker</td>
      <td>Regional Director</td>
      <td>Edinburgh</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Michael Bruce</td>
      <td>Javascript Developer</td>
      <td>Singapore</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
    
    </tr>
    <tr>
      <td>Donna Snider</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
    <tr>
      <td>Donna Snider</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td><button className="btn btn-success"><i className="fa fa-download"></i> Download</button></td>
     
    </tr>
  </tbody>
 
</table>

         </div>
     
  )
}
export default Data
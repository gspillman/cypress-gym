import React from "react";
import Table from 'react-bootstrap/Table';
//import 'bootstrap/dist/css/bootstrap.css';

function UserTable() {
    return (
    <Table stripped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th width="170">Employee Name</th>
          <th width="170">Employee ID</th>
          <th width="1950">Email</th>
          <th width="170">Department</th>
          <th width="870">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rakesh Bapat</td>
          <td>1123</td>
          <td>Rakesh.B@funcompany2000.com</td>
          <td>Engineering</td>
          <td>Mumbai</td>
     
        </tr>
        <tr>
          <td>Jackson Southern</td>
          <td>1124</td>
          <td>Jackson.S@funcompany2000.com</td>
          <td>Marketing</td>
          <td>Hyderabad</td>
     
        </tr>
        <tr>
          <td>Keshav Thompson</td>
          <td>1124</td>
          <td>Keshav.T@funcompany2000.com</td>
          <td>Engineering</td>
          <td>Chennai</td>
     
        </tr>
        <tr>
          <td>Neilesh Jain</td>
          <td>1125</td>
          <td>Neilesh.J@funcompany2000.com</td>
          <td>Sales</td>
          <td>Gwalior</td>
     
        </tr>
        <tr>
          <td>Akbar Sheikh</td>
          <td>1126</td>
          <td>Akbar.S@funcompany2000.com</td>
          <td>Tech Support</td>
          <td>Indore</td>
     
        </tr>
        <tr>
          <td>Sarita Choudhury</td>
          <td>1127</td>
          <td>Sarita.C@funcompany2000.com</td>
          <td>Accounting</td>
          <td>Delhi</td>
     
        </tr>
     
      </tbody>
      </Table>);    
}

export default UserTable;
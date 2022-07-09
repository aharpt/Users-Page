import React from 'react';
import { Table } from 'react-bootstrap';

function User() {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => setUserData(data))
  }, [])

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Street Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => {
            return (
              <tr key={`user_${index}`}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td> 
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    );
  }

export default User;
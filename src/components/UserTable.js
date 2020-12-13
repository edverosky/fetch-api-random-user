import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserTableHeader from './UserTableHeader'

function UserTable() {
  const [userData, setUserData] = useState([]);
  const [numRecords, setNumRecords] = useState(3);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${numRecords}`)
      .then((response) => {
        setUserData(response.data.results);
      });
  }, [numRecords]);

  function handleSelectFunc(event) {
    setNumRecords(event.target.value);
  }

  return (
    <>
      <UserTableHeader handleSelect={handleSelectFunc} />
      <div className="container user-table ">
        <h1 className="mt-5 mb-5">User Listings via API</h1>
        <table className="table align-middle table-hover">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City/State</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item.picture.thumbnail}>
                <td><img className="profile-photo" src={item.picture.medium} alt='Profile' /></td>
                <td>{item.name.first}</td>
                <td className="email-lg"><a href={'mailto:' + item.email}>{item.email}</a></td>
                <td className="email-sm"><a href={'mailto:' + item.email}><img className="cell-image" src="./favicon.ico" alt='Email'/></a></td>
                <td>{item.location.city + ', ' + item.location.state}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
      <footer className='footer'><div className="text-center">API via <a href="randomuser.me">randomuser.me</a></div>
        <div className='footer-base'></div></footer>
    </>);
}

export default UserTable;
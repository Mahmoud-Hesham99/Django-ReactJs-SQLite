import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile.js';
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { apis } from '../django_api.js';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchAllUsers = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(apis.get_all_accounts, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    
    // Redirect to the login page
    navigate('/login');
};
  useEffect(() => {
    // Fetch all registered users on component mount
    fetchAllUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        {/* <h2>Edit Profile</h2> */}
        <EditProfile onProfileEdit={fetchAllUsers} />
        <button onClick={handleLogout}>Logout</button>

      </div>

      <div className="users-section">
        <h2>All Registered Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
    
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import '../css/EditProfile.css';
import { apis } from '../django_api.js';

const EditProfile = ({ onProfileEdit }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');


  useEffect(() => {
    // Fetch user details using the userId
    if (userId) {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      };

      fetch(`${apis.get_profile}${userId}`, requestOptions)
        .then((response) => response.json())
        .then((userData) => {
          setName(userData.name);
          setEmail(userData.email);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userId,
        name: name,
        email: email,
      }),
    };

    fetch(apis.update_profile, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
          setIsEditing(false);
          setTimeout(() => {
            setMessage('');
          }, 3000);
          if (typeof onProfileEdit === 'function') {
            onProfileEdit();
          }
        }
        else{
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  return (
    <div className="user-profile-container">
      <h2>Your Profile</h2>
      <div className="user-details">
        <div className="detail">
          <strong>Name:</strong>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="detail">
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span>{email}</span>
          )}
        </div>
      </div>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <p className={"message"}>{message}</p>

    </div>
  );
};

export default EditProfile;

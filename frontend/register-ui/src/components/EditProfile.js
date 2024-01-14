import React, { useState } from 'react';
import '../css/EditProfile.css';

const EditProfile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
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
    </div>
  );
};

export default EditProfile;
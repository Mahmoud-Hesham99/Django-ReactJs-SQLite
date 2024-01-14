import React, { useState } from 'react';
import '../css/SignUp.css';
import { apis } from '../django_api.js';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, password: password }),
    };
    // console.log('Request Options:', requestOptions.body); // Log request options
    fetch(apis.sign_up, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log('API Response:', data); // Log the response
        if (data.success) {
          setMessage(data.message);
          setName('');
          setEmail('');
          setPassword('');
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        setMessage('An error occurred');
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {message && <p className={`message ${message.includes('failed') ? 'error' : 'success'}`}>{message}</p>}
      </form>
     
    </div>
  );
};

export default SignUp;

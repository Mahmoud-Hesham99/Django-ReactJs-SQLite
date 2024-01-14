import React, { useState } from 'react';
import '../css/Login.css';
import { apis } from '../django_api.js';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const requestOptions = { // Request options
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      };
      console.log('Request Options:', requestOptions.body); // Log request options
      fetch(apis.login, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log('API Response:', data); // Log the response
        if (data.success) {
          setMessage(data.message);
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


      console.log('Login submitted:', { email, password });
    };
  
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
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
          <button type="submit">Log In</button>
          <p className={"message"}>{message}</p>
        </form>
      </div>
    );
  };
  
  export default Login;
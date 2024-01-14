import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <div>
          <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path='/home' element={<Dashboard/>} />
          <Route exact path='/SignUp' element={<SignUp/>} />
          <Route exact path='/EditProfile' element={<EditProfile/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
    </div>
  );
}



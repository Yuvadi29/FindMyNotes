import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgot-Password';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Search from './pages/Search';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route path='/upload' element={<Upload />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;

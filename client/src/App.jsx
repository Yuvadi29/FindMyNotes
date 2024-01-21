import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgot-Password';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Search from './pages/Search';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Router>
      {/* Include Header outside Routes */}
      <Header />

      {/* Use a div to wrap the routes */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {isAuthenticated ? (
            <>
              <Route path="/upload" element={<Upload />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

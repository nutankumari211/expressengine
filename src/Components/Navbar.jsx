import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/logo.png';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const navbarStyle = {
    backgroundColor: scrolled ? '#ffffff' : 'transparent',
    color: scrolled ? '#000000' : '#ffffff', // Change text color to black when scrolled
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  };

  const navLinkStyle = {
    fontSize: scrolled ? '1.05rem' : '1rem', // Increase font size when scrolled
    color: scrolled ? '#000000' : '#ffffff', // Change text color to black when scrolled
    transition: 'color 0.3s ease, font-size 0.3s ease',
  };

  return (
    <nav className={`navbar navbar-expand-lg custom-top-nav my-navbar ${scrolled ? 'scrolled' : ''}`} style={navbarStyle}>
      <div className="container">
      <Link to="/" className="navbar-brand" style={{ color: scrolled ? '#000000' : '#ffffff' }}>
  <img src={logo} style={{ height: '60px', width: '60px' }} alt="Logo" />
</Link>


        <div className={`collapse navbar-collapse justify-content-end`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
                style={navLinkStyle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
                style={navLinkStyle}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
                style={navLinkStyle}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Sign In and Sign Up Buttons */}
          <div className="ml-auto">
            <Link to="/login" className={`btn btn-primary  mr-2 ${scrolled ? 'scrolled' : ''}`} style={navLinkStyle}>
              Sign In
            </Link>
            <Link to="/signup" className={`btn btn-primary  mr-2 ${scrolled ? 'scrolled' : ''}`} style={{...navLinkStyle, marginLeft: '6px'}}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;

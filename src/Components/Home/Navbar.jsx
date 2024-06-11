import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 5%',
  color: 'white',
  backgroundColor: 'transparent',
};
const nav_logo = {
  fontFamily: 'Outfit',
  fontSize: '2rem',
  fontWeight: 500,
};
const nav_menu = {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  gap: '2rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};
const nav_home = {
  borderRadius: '50px',
  padding: '5px 10px',
  background: 'black',
  color: 'white',
};
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1.2rem',
};
const hamburger = {
  display: 'none',
  flexDirection: 'column',
  cursor: 'pointer',
};
const bar = {
  height: '2px',
  width: '20px',
  backgroundColor: 'white',
  margin: '3px 0',
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navMenuStyle = {
    ...nav_menu,
    flexDirection: menuOpen ? 'column' : 'row',
    display: menuOpen ? 'flex' : 'flex',
    position: menuOpen ? 'absolute' : 'static',
    top: menuOpen ? '60px' : '0',
    right: menuOpen ? '5%' : '0',
    backgroundColor: menuOpen ? 'black' : 'transparent',
    padding: menuOpen ? '10px' : '0',
  };

  return (
    <div style={nav}>
      <div style={nav_logo}>AQM_APP</div>
      <div className="hamburger" style={hamburger} onClick={toggleMenu}>
        <div style={bar}></div>
        <div style={bar}></div>
        <div style={bar}></div>
      </div>
      <ul style={navMenuStyle} className={menuOpen ? 'open' : ''}>
        <li>
          <Link to="/" style={{ ...nav_home, ...linkStyle }}>Home</Link>


          
        </li>
        <li>
          <Link to="/About" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
        <li>
          <Link to="/signup" style={linkStyle}>Sign Up</Link>
        </li>
        <li>
          <Link to="/login" style={linkStyle}>Login</Link>
        </li>
      </ul>
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: flex;
            }
            ul {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 60px;
              right: 5%;
              background-color: black;
              padding: 10px;
              width: 90%;
            }
            ul.open {
              display: flex;
            }
          }
          @media (min-width: 769px) {
            .hamburger {
              display: none;
            }
            ul {
              display: flex;
              flex-direction: row;
              position: static;
              background-color: transparent;
              padding: 0;
              width: auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

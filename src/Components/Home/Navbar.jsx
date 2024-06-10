import React from "react";
import { Link } from "react-router-dom";

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 10%',
  color: 'white',
  backgroundColor: 'transparent',
};
const nav_logo = {
  fontFamily: 'Outfit',
  fontSize: '5vw',
  fontWeight: 500,
};
const nav_menu = {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  gap: '5vw',
  flexWrap: 'wrap',
  justifyContent: 'center',
};
const nav_home = {
  borderRadius: '50px',
  padding: '10px 20px',
  background: 'black',
  color: '#000',
};
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '4vw',
};

const Navbar = () => {
  return (
    <div style={nav}>
      <div style={nav_logo}>AQM_APP</div>
      <ul style={nav_menu}>
        <li>
          <Link to="/" style={{ ...nav_home, ...linkStyle }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
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
    </div>
  );
};

export default Navbar;

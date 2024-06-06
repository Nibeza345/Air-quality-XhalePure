import React from "react";
import { Link } from "react-router-dom";

const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 120px',
    color: 'white',
}

const nav_logo = {
    fontFamily: 'outfit',
    fontSize: '42px',
    fontWeight: 500,
}

const nav_menu = {
    display: 'flex', 
    alignItems: 'center',
    fontSize: '42px',
    listStyle: 'none',
    gap: '90px',
}

const nav_home = {
    borderRadius: '50px',
    padding: '10px 38px',
    background: 'black',
    color: '#000',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

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
                <Link to="/Login" style={linkStyle}>Login</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;

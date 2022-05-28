import React from 'react';
import { useNavigate } from "react-router-dom";
/* import Styles from './Navbar.module.css' */

const Navbar = () => {
    
    let navigation = useNavigate();
    function Home() {
        navigation('/');
    }

    return (
        <div className="nav">
            <div className="logo">
                <a onClick={Home}>LOGO</a>
            </div>
            <nav className="navbar">
                <ul>
                    <li className="list">
                        <a href='#'>Our Service</a>
                    </li>
                    <li className="list">
                        <a href='#'>Why Us</a>
                    </li>
                    <li className="list">
                        <a href='#'>Testimonial</a>
                    </li>
                    <li className="list">
                        <a href='#'>FAQ</a>
                    </li>
                    <li className="list">
                        <button>Register</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
import React from 'react';
import { useNavigate } from "react-router-dom";
import Styles from './Navbar.module.css'

const Navbar = () => {
    
    let navigation = useNavigate();
    function Home() {
        navigation('/');
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <a onClick={Home}>LOGO</a>
            </div>
            <nav className={Styles.navbar}>
                <ul>
                    <li className={Styles.list}>
                        <a href='#'>Our Service</a>
                    </li>
                    <li className={Styles.list}>
                        <a href='#'>Why Us</a>
                    </li>
                    <li className={Styles.list}>
                        <a href='#'>Testimonial</a>
                    </li>
                    <li className={Styles.list}>
                        <a href='#'>FAQ</a>
                    </li>
                    <li className={Styles.list}>
                        <button>Register</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
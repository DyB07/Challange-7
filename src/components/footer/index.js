import React from "react";
/* import Styles from './footer.module.css'; */
import fb from '../../asset/fb.png';
import ig from '../../asset/ig.png';
import twitter from '../../asset/twitter.png';
import email from '../../asset/email.png';
import twitch from '../../asset/twitch.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="bodyfooter">
                <div className="mainfooter">
                    <div className="col-1">
                        <ul className="ul-1">
                            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                            <li>binarcarrental@gmail.com</li>
                            <li>081-233-334-808</li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <ul className="ul-1">
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Why Us</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <h4>Connect with us</h4>
                        <div className="sosmed">
                            <a href="#"><img className="img1" src={fb} /></a>
                            <a href="#"><img className="img1" src={ig} /></a>
                            <a href="#"><img className="img1" src={twitter} /></a>
                            <a href="#"><img className="img1" src={email} /></a>
                            <a href="#"><img className="img1" src={twitch} /></a>
                        </div>
                    </div>
                    <div className="col-1">
                        <h4>Copyright Binar 2022</h4>
                        <div className="brand"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
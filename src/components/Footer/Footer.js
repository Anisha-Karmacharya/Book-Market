import React from 'react';
import "./Footer.scss"
import { FiInstagram, FiTwitter} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer container-fluid">
                <div className="footerBg">
                    <div className="footerContainer  grid">
                        <div>
                            <h1 className="footerTitle">Book Market</h1>
                        </div>
                        <ul className="footerLinks">

                        
                        </ul>
                        <div className="footerSocials">
                            <a href="#" className="footerSocial"><FaFacebookF /></a>
                            <a href="#" className="footerSocial"><FiInstagram /></a>
                            <a href="#" className="footerSocial"><FiTwitter /></a>
                        </div>
                    </div> 
                <p className="footerCopy">&#169; Book Market. All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
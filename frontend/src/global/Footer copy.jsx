import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import '../cssStyles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* System Description */}
                    <div className="footer-section">
                        <h6 className="footer-title">Smart Meter</h6>
                        <p className="footer-text">Efficiently manage meters with advanced technology.</p>
                    </div>
                    {/* Useful Links */}
                    <div className="footer-section">
                        <h6 className="footer-title">Useful Links</h6>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h6 className="footer-title">Contact</h6>
                        <p><FaHome className="footer-icon" /> Analogics Tech India Ltd, Nacharam Industrial Estate, Hyderabad – 500 076, India.</p>
                        <p><FaEnvelope className="footer-icon" /> <a href="mailto:info@analogicgroup.com">info@analogicgroup.com</a></p>
                        <p><FaPhone className="footer-icon" /> +91-40-6735 5000</p>
                        <p><FaPrint className="footer-icon" /> +123 456 7891</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-section">
                        <h6 className="footer-title">Follow Us</h6>
                        <div className="footer-social">
                            <a href="http://www.analogicgroup.com" target="_blank" rel="noopener noreferrer">Analogics</a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; 2025 Analogic Tech India Ltd. Version 1.0 | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

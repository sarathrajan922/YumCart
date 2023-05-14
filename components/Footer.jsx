import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footercomponents = () => {
    return (
      <>
       <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-heading">Contact Us</h3>
        <div className="contact-info">
          <p>123 Main Street<br />New York, NY 10001</p>
          <p><a href="mailto:info@example.com">info@example.com</a><br />(123) 456-7890</p>
        </div>
        <div className="social-links">
          <a href="#"><FaFacebook className="social-icon" /></a>
          <a href="#"><FaTwitter className="social-icon" /></a>
          <a href="#"><FaInstagram className="social-icon" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Website. All Rights Reserved.</p>
      </div>
    </footer>
      </>
    );
  };


export default Footercomponents;
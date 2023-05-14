
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
const Contact = ()=>{
    return (
        <>
<div className="container">
      <h1>Contact Us</h1>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="icon-wrapper">
            <FaMapMarkerAlt className="icon" />
          </div>
          <p>123 Main Street<br />New York, NY 10001</p>
        </div>
        <div className="contact-info">
          <div className="icon-wrapper">
            <FaEnvelope className="icon" />
          </div>
          <p>info@example.com</p>
        </div>
        <div className="contact-info">
          <div className="icon-wrapper">
            <FaPhoneAlt className="icon" />
          </div>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
        </>
    )
}

export default Contact
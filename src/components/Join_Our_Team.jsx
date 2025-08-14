import "./JoinOurTeam.css";
import main from '../assets/image 1.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function JoinOurTeam() {
  return (
    <>
    <div className="join-team-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Join Our Team</h2>
        <p className="section-description mb-4">
          We’re always looking for passionate, talented, and creative individuals to help us grow and deliver the best to our clients. 
          If you’re ready to make an impact, we’d love to meet you!
        </p>

        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>🚀 Career Growth</h5>
              <p>Opportunities to learn, grow, and advance in your career.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>🤝 Friendly Team</h5>
              <p>Work with supportive colleagues in a collaborative environment.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>📅 Flexibility</h5>
              <p>Enjoy a healthy work-life balance with flexible schedules.</p>
            </div>
          </div>
        </div>

        <a href="mailto:yourhr@email.com" className="btn btn-main">
          Apply Now
        </a>
      </div>

   
    </div>
   <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={main} alt="Logo" style={{ width: "250px" }} />
          </div>

          {/* Quick Links */}
       <div className="col-md-4 mb-4 mb-md-0">
  <h5 className="text-uppercase">Useful Links</h5>
  <ul className="list-unstyled mt-3">
    <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
    <li><Link to="/about" className="text-white text-decoration-none">Who We Are</Link></li>
    <li><Link to="/industries" className="text-white text-decoration-none">Industries We Serve</Link></li>
    <li><Link to="/insights" className="text-white text-decoration-none">Insights</Link></li>
    <li><Link to="/services/audit" className="text-white text-decoration-none">Services</Link></li>
    <li><Link to="/careers" className="text-white text-decoration-none">Join Our Team</Link></li>
    <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
  </ul>
</div>
          {/* Contact + Social Icons */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>

            {/* Social Media */}
            <div className="d-flex gap-2 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>

            <ul className="list-unstyled">
              <li>Email: <a href="mailto:info@unsassociates.com" className="text-white text-decoration-none">caknr90@gmail.com</a></li>
              <li>Phone: <a href="tel:+911234567890" className="text-white text-decoration-none">96772 78078 </a></li>
              <li>Address: 9TH CROSS, THILLAI NAGAR,<br/> TIRCHY-620018 </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

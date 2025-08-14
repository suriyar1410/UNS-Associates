
import "./industry.css";
import { FaUniversity, FaIndustry, FaPlane, FaCar, FaLaptop, FaBuilding, FaHotel, FaGraduationCap, FaHeartbeat, FaGlobe } from "react-icons/fa";
import main from '../assets/image 1.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function IndustriesWeServe() {
  const industries = [
    { icon: <FaUniversity />, name: "Banking & Finance" },
    { icon: <FaIndustry />, name: "Textiles Manufacturing" },
    { icon: <FaIndustry />, name: "Pipe Manufacturing" },
    { icon: <FaPlane />, name: "Aerospace & Defence" },
    { icon: <FaCar />, name: "Automobile Industry" },
    { icon: <FaLaptop />, name: "IT & IT Enabled Services" },
    { icon: <FaBuilding />, name: "Real Estate & Infrastructure" },
    { icon: <FaHotel />, name: "Hotel Industry" },
    { icon: <FaGraduationCap />, name: "Educational Institutions" },
    { icon: <FaHeartbeat />, name: "Healthcare" },
    { icon: <FaGlobe />, name: "Telecom & Internet Services" },
    { icon: <FaBuilding />, name: "FMCG & Retail" }
  ];

  return (
    <>
    <div className="industries-page py-5">
      <div className="container">
        <h1 className="page-title text-center mb-5">Industries We Serve</h1>
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="industry-card p-4 text-center h-100">
                <div className="industry-icon mb-3">{industry.icon}</div>
                <h6 className="industry-name">{industry.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>

      <footer className="bg-dark text-white py-5">
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

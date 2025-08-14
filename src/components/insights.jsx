import "./insights.css";
import { FaBalanceScale, FaRegFileAlt, FaIndustry, FaGavel, FaUniversity, FaRocket, FaChartLine, FaBuilding } from "react-icons/fa";
import main from '../assets/image 1.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Insight() {
  const services = [
    { icon: <FaRegFileAlt />, title: "Audit & Assurance" },
    { icon: <FaBalanceScale />, title: "Taxation (Direct/Indirect)" },
    { icon: <FaGavel />, title: "Corporate Laws" },
    { icon: <FaRocket />, title: "Business Setup" },
    { icon: <FaUniversity />, title: "Legal Advisory" },
    { icon: <FaBuilding />, title: "Bank Audit" },
    { icon: <FaRocket />, title: "Startup/Registration" },
    { icon: <FaChartLine />, title: "Business Growth Advisory" },
    { icon: <FaGavel />, title: "Legal & Corporate Governance" },
  ];

  return (
    <>
   
    <div className="insight-page">
      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Insights</h2>
          <p className="section-text">
            U N S & Associates is a professionally managed firm catering to domestic clients with a broad range of services in taxation, regulatory, and advisory services. Our team includes dedicated professionals like Chartered Accountants and Consultants, delivering valuable, consistent, and efficient services based on deep knowledge and experience in audit, taxation, regulatory compliance, and business services.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="vm-card p-4 h-100">
                <h3 className="vm-title">Our Vision</h3>
                <p>
                  To be amongst the finest Chartered Accountants and advisory firms, delivering assured quality services consistently with values of professional commitment, integrity, innovation, and partnership.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vm-card p-4 h-100">
                <h3 className="vm-title">Our Mission</h3>
                <p>
                  To provide high-quality, personalized accounting and financial services that help our clients achieve their goals while adhering to ethical standards and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Services</h2>
          <div className="row g-4">
            {services.map((service, idx) => (
              <div key={idx} className="col-sm-6 col-md-4">
                <div className="service-card p-4 text-center h-100">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <h5>{service.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p>Have questions? We’d love to hear from you.</p>
          <a href="https://wa.me/919999999999" className="btn btn-secondary me-3">WhatsApp Us</a>
          <a href="#contact-form" className="btn btn-main">Contact Form</a>
        </div>
      </section>

      {/* Google Map */}
      {/* <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section> */}


    
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

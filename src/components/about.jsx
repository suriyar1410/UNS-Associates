import main from '../assets/image 1.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./about.css";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="about-hero text-center py-5">
        <div className="container">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Professional expertise. Ethical commitment. Your trusted business partner.
          </p>
        </div>
      </section>
      <section className="about-section py-5">
        <div className="container">
          <p className="about-text">
            U N S & Associates is a professionally managed firm catering to domestic clients with a broad range of services in taxation, regulatory, and advisory services.
            Our team of Chartered Accountants and Consultants delivers valuable, consistent, and efficient services based on deep knowledge and experience in audit, taxation, regulatory compliance, and related business services.
          </p>
          <p className="about-text">
            We aim to help our clients focus on their business and financial goals by offering personalized, tailored services.
            Over the years, we have earned the trust of clients across industries including Banking & Finance, Textiles, Aerospace, Defence, Automobile, IT, Real Estate, FMCG, Healthcare, and more.
          </p>
          <p className="about-text">
            Our commitment to upgrading knowledge, maintaining ethical standards, and supporting technology ensures we deliver quality and integrity in all our work.
          </p>
        </div>
      </section>
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
  <section className="container py-5">
        <h2 className="text-center mb-5 section-title">Why Choose Us?</h2>
        <div className="row">
          {[
            "Tailored Business Solutions",
            "Industry Expertise",
            "End-to-End Compliance",
            "Ethical Practices",
            "Modern Tech Tools",
            "Experienced Professionals",
          ].map((item, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card feature-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
         <div className="col-md-4 mb-4 mb-md-0">
            <img src={main} alt="Logo" style={{ width: "250px" }} />
          </div>
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
          <div className="col-md-4">
           <h5 className="text-uppercase">Contact Us</h5>

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
    </div>
  );
}

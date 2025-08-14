import './home.css'
import main from '../assets/image 1.jpg'
import image from '../assets/s1.jpg'
import image2 from '../assets/s2.jpg'
import image3 from '../assets/s3.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {



  
  return (
    <>
      <div id="homeCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active position-relative">
      <img src={image} className="d-block w-100" alt="Slide 1" />
      <div className="carousel-caption d-none d-md-block custom-caption">
        <h1>U N S & Associates</h1>
        <p>
        A team of experienced Chartered Accountants helping businesses grow through Excellence, Integrity, and Independence.
        </p>
      </div>
    </div>

    <div className="carousel-item position-relative">
      <img src={image2} className="d-block w-100" alt="Slide 2" />
      <div className="carousel-caption d-none d-md-block custom-caption">
        <h1>U N S & Associates</h1>
        <p>
          A team of experienced Chartered Accountants helping businesses grow with integrity, innovation, and precision.
        </p>
      </div>
    </div>

    <div className="carousel-item position-relative">
      <img src={image3} className="d-block w-100" alt="Slide 3" />
      <div className="carousel-caption d-none d-md-block custom-caption">
        <h1>U N S & Associates</h1>
        <p>
          A team of experienced Chartered Accountants helping businesses grow with integrity, innovation, and precision.
        </p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


 <div className="custom-card d-flex align-items-center justify-content-center ">
      <p>Our vision is to be amongst the finest Chartered Accountants and advisory firm to provide assured quality services 
        consistently with  our values of professional commitment,integrity, innovation, and partnership.
        To be the most highly respected professional firm where clients come to their mind that their interests are being 
        cared for and their doubts are resolved with the best solutions to their contentment by a 
        team that enjoys working with the team and one another.</p>
  </div>

<div className="container my-5">
  <div className="row">
    <div className="col-md-6 mt-2">
      <div className="custom">
        <h4>Our Mission</h4>
        <p>
          To provide high-quality, personalized accounting and financial services that help our clients achieve their financial goals while
          adhering to ethical standards and best practices.
        </p>
      </div>
    </div>

    <div className="col-md-6 mt-2">
      <div className="custom">
        <h4>Our Vision</h4>
        <p>
          Our vision is to be amongst the finest Chartered Accountants and advisory firm to provide assured quality services consistently with our values of professional 
          commitment, integrity, innovation, and partnership.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="bg-primary-banner d-flex align-items-center justify-content-center">
  <h1 className="text-white m-0">U N S & Associates – Chartered Accountants | Excellence, Integrity & Independence</h1>
</div>

 <section className="container my-5">
  <h2 className="text-center mb-5 main-title fw-bold">Our Services</h2>
  <div className="row g-4">
    {[
      {
        title: 'Accounting & Bookkeeping',
        services: ['Ledger maintenance', 'MIS reports', 'Financial statements'],
        img: image
      },
      {
        title: 'Taxation',
        services: ['GST returns', 'Income Tax filing', 'Tax advisory'],
        img: image2
      },
      {
        title: 'Auditing',
        services: ['Internal audit', 'Statutory audit', 'Tax audit'],
        img: image3
      },
      {
        title: 'Business Setup & Compliance',
        services: ['Company incorporation', 'ROC filings', 'Start-up registration'],
        img: image3
      },
      {
        title: 'Other Services',
        services: ['Payroll processing', 'Financial planning', 'Investment advisory'],
        img: image
      }
    ].map((card, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card service-card h-100 shadow-sm">
          <img src={card.img} className="card-img-top service-img" alt={card.title} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title title">{card.title}</h5>
            <ul className="list-unstyled flex-grow-1">
              {card.services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="#" className="btn btn-outline-primary button mt-3 align-self-center">Read More</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


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
};

export default Home;

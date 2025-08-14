import logo from './assets/imgae.png'; 
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import { Routes, Route, Link } from 'react-router-dom';
import Industries from './components/industry';
import ContactUs from './components/contactus';
import Insight from './components/insights';
import JoinOurTeam from './components/Join_Our_Team';
import AuditAssurance from './components/services/audit & assurance';
import Taxes from './components/services/taxation';
import Bankaudit from './components/services/bank audit';
import Businessgrowth from './components/services/business growth';
import BusinessSetup from './components/services/business setup';
import Corporatelaws from './components/services/Corporate laws';
import Legaladvisory from './components/services/legal advisory';
import LegalCorporate from './components/services/legal&corporate';
import Startup from './components/services/startup';


function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm custom-navbar">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="navbar-logo me-2" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center menu" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">Who We Are</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/industries">Industries We Serve</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/insights">Insights</Link>
            </li>
            {/* Services Dropdown */}
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu custom-dropdown" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/services/audit">Audit & Assurance</Link></li>
                <li><Link className="dropdown-item" to="/services/Taxes">Taxation (Direct/Indirect)</Link></li>
                <li><Link className="dropdown-item" to="/services/corporate-laws">Corporate Laws</Link></li>
                <li><Link className="dropdown-item" to="/services/business-setup">Business Setup</Link></li>
                <li><Link className="dropdown-item" to="/services/legal-advisory">Legal Advisory</Link></li>
                <li><Link className="dropdown-item" to="/services/bank-audit">Bank Audit</Link></li>
                <li><Link className="dropdown-item" to="/services/startup">Startup/Registration</Link></li>
                <li><Link className="dropdown-item" to="/services/business-growth">Business Growth Advisory</Link></li>
                <li><Link className="dropdown-item" to="/services/governance">Legal & Corporate Governance</Link></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/careers">Join With Our Team</Link>
            </li>

                <li className="nav-item mx-2">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insight/>} />
          <Route path="/careers" element={<JoinOurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/audit" element={<AuditAssurance />} />
          <Route path="/services/Taxes" element={<Taxes/>} />
          <Route path="/services/bank-audit" element={<Bankaudit/>} />
          <Route path="/services/business-growth" element={<Businessgrowth/>} />
          <Route path="/services/business-setup" element={<BusinessSetup/>} />
          <Route path="/services/corporate-laws" element={<Corporatelaws/>} />
          <Route path="/services/legal-advisory" element={<Legaladvisory/>} />
          <Route path="/services/governance" element={<LegalCorporate/>} />
          <Route path="/services/startup" element={<Startup/>} />
      </Routes>
    </>
  );
}

export default App;

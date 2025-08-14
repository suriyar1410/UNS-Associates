
// import "./About.css";

// const About = () => {
//   return (

 
//      <div className="about-page bg-light">
//       {/* Hero Section */}
//       <section className="hero-section text-white text-center py-5">
//         <div className="container">
//           <h1 className="display-4 fw-bold">About U N S & Associates</h1>
//           <p className="lead">
//             Your trusted partner in Taxation, Audit, Legal, and Advisory Services.
//           </p>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="container py-5">
//         <div className="row align-items-center">
//           <div className="col-md-6 mb-4 mb-md-0">
//             <img src="/images/about-office.jpg" alt="Office" className="img-fluid rounded shadow" />
//           </div>
//           <div className="col-md-6">
//             <h2 className="section-title">Who We Are</h2>
//             <p>
//               U N S & Associates is a professionally managed firm offering a wide range of services in taxation,
//               audit, and business advisory. Backed by experienced Chartered Accountants and Consultants, we provide
//               personalized solutions for your business.
//             </p>
//             <p>
//               Our team is committed to delivering high-quality, ethical, and technology-driven services to help you
//               stay ahead.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission/Vision/Values */}
//       <section className="bg-white py-5">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-md-4 mb-4">
//               <h4>Mission</h4>
//               <p>
//                 Empower businesses through strategic insights, regulatory compliance, and financial clarity.
//               </p>
//             </div>
//             <div className="col-md-4 mb-4">
//               <h4>Vision</h4>
//               <p>
//                 To be a trusted advisory firm delivering excellence, innovation, and integrity across industries.
//               </p>
//             </div>
//             <div className="col-md-4 mb-4">
//               <h4>Core Values</h4>
//               <ul className="list-unstyled">
//                 <li>✔ Ethics & Integrity</li>
//                 <li>✔ Client-Centric</li>
//                 <li>✔ Continuous Learning</li>
//                 <li>✔ Excellence in Service</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="container py-5">
//         <h2 className="text-center mb-5 section-title">Why Choose Us?</h2>
//         <div className="row">
//           {[
//             "Tailored Business Solutions",
//             "Industry Expertise",
//             "End-to-End Compliance",
//             "Ethical Practices",
//             "Modern Tech Tools",
//             "Experienced Professionals",
//           ].map((item, idx) => (
//             <div className="col-md-4 mb-4" key={idx}>
//               <div className="card feature-card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{item}</h5>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section className="bg-white py-5">
//         <div className="container">
//           <h2 className="text-center mb-5 section-title">Industries We Serve</h2>
//           <div className="row text-center">
//             {[
//               "Banking & Finance",
//               "Textiles",
//               "Aerospace & Defence",
//               "IT & Telecom",
//               "Real Estate",
//               "Education",
//               "Healthcare",
//               "Travel & Leisure",
//               "Automobile",
//               "Hospitality",
//               "Insurance",
//               "FMCG",
//             ].map((industry, idx) => (
//               <div className="col-6 col-md-3 mb-3" key={idx}>
//                 <div className="industry-box p-3 border rounded">{industry}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta-section text-white text-center py-5">
//         <div className="container">
//           <h2 className="mb-3">Let’s Grow Together</h2>
//           <p className="mb-4">Reach out and find how we can help you transform your business.</p>
//           <a href="/contact" className="btn btn-light btn-lg cta-button">Contact Us</a>
//         </div>
//       </section>
//     </div>
    
   
//   );
// };

// export default About;



import "./about.css";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero text-center py-5">
        <div className="container">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Professional expertise. Ethical commitment. Your trusted business partner.
          </p>
        </div>
      </section>

      {/* About Section */}
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
    </div>
  );
}

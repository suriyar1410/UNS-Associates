// import React from 'react';
// import './industry.css'


// const Industries = () => {
//   const industries = [
//     {
//       title: 'Manufacturing',
//       description: 'We help manufacturing companies streamline cost accounting, inventory, and tax compliance.',
//       image: "",
//     },
//     {
//       title: 'Retail & E-commerce',
//       description: 'Supporting retail businesses with GST compliance, bookkeeping, and performance analysis.',
//       image: "",
//     },
//     {
//       title: 'Startups & Tech',
//       description: 'Guiding startups with incorporation, funding advisory, and financial structuring.',
//       image: "",
//     },
//     {
//       title: 'Healthcare',
//       description: 'Financial compliance, budgeting, and revenue cycle management for clinics and hospitals.',
//       image: "",
//     },
//     {
//       title: 'Real Estate & Construction',
//       description: 'Handling complex regulatory and tax structures in real estate and infra projects.',
//       image: "",
//     },
//     {
//       title: 'NGOs & Education',
//       description: 'Support for grants, compliance, FCRA, and statutory audits for educational and non-profit orgs.',
//       image: "",
//     },
//   ];

//   return (
//     <div className="container py-5">
//       <h1 className="text-center mb-5 fw-bold ">Industries We Serve</h1>
//       <div className="row g-4">
//         {industries.map((item, index) => (
//           <div key={index} className="col-md-6 col-lg-4">
//             <div className="card h-100 shadow-sm industry-card">
//               <img src={item.image} className="card-img-top" alt={item.title} />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title fw-semibold">{item.title}</h5>
//                 <p className="card-text flex-grow-1">{item.description}</p>
//                 <a href="#" className="btn btn-outline-primary mt-3 align-self-start">Read More</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;


import "./industry.css";
import { FaUniversity, FaIndustry, FaPlane, FaCar, FaLaptop, FaBuilding, FaHotel, FaGraduationCap, FaHeartbeat, FaGlobe } from "react-icons/fa";

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
  );
}

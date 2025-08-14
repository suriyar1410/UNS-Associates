import React from "react";
import './audit.css'

export default function AuditAssurance() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <div className="background py-3 text-center">
        <h1 className="fw-bold">Audit & Assurance</h1>
      </div>

      {/* Image */}
      <div className="container py-4">
        <img
          src="/audit-image.jpg"
          alt="Audit & Assurance"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Main Content */}
      <div className="container py-3">
        <h2 className="fw-bold text-success mb-3">Audit & Assurance</h2>
        <p>
          Providing assurance services under various statutes across various industries for the past several decades.
        </p>

        {/* AUP Section */}
        <div className="bg-light border rounded p-3 mb-4">
          <h5 className="fw-bold">AGREED UPON PROCEDURES (AUP)</h5>
          <ul>
            <li>Agreed-upon procedures are performed in relation to financial information in line with SRS 4400 issued by ICAI.</li>
            <li>Procedures and tests are sufficiently detailed so as to be clear and unambiguous, and discussed and agreed in advance with the engaging parties so that the factual findings are useful to them and, depending upon the engagement, others to whom the report is made available.</li>
            <li>AUP Report does not express a conclusion, and therefore it is not an assurance engagement in the technical sense.</li>
          </ul>
        </div>

        {/* Other Sections */}
        {[
          "FORENSIC & INVESTIGATIVE AUDITS",
          "INTERNAL FINANCIAL CONTROLS (IFC)",
          "RISK ADVISORY, INTERNAL & MANAGEMENT AUDITS",
          "IND-AS, IFRS & US GAAP ADVISORY",
          "FINANCIAL STATEMENTS AUDIT",
        ].map((title, idx) => (
          <button
            key={idx}
            className="btn btn-light border w-100 text-start mb-2"
          >
            {title}
          </button>
        ))}
      </div>

      {/* Sidebar */}
      <div className="container py-4">
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3 bg-success text-white p-3 rounded">
            <h5 className="fw-bold">How we can help you?</h5>
            <p>Contact us at the office nearest to you or submit a business enquiry online.</p>
            <button className="btn btn-light text-success fw-semibold">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

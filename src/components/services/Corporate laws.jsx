
import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../../index.css';

export default function Corporatelaws() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "AGREED UPON PROCEDURES (AUP)",
      content: [
        "Agreed-upon procedures are performed in relation to financial information in line with SRS 4400 issued by ICAI.",
        "Procedures and tests are sufficiently detailed so as to be clear and unambiguous, and discussed and agreed in advance with the engaging parties so that the factual findings are useful to them and, depending upon the engagement, others to whom the report is made available.",
        "AUP Report does not express a conclusion, and therefore it is not an assurance engagement in the technical sense."
      ]
    },
    {
      title: "FORENSIC & INVESTIGATIVE AUDITS",
      content: [
        "Undertaken at the specific request of the management, private equity funds or regulators to detect fraud, misappropriation of resources, bribery, misconduct or other financial irregularities.",
        "Experienced and qualified subject matter experts are capable of handling forensic and investigative assignments with prodigious ability.",
        "Forensic practice offers advice, helping clients deal with various complicated business situations and always keeping them on top of the critical risks."
      ]
    },
    {
      title: "INTERNAL FINANCIAL CONTROLS (IFC)",
      content: [
        "Testing of design and operative effectiveness of organisation’s process and entity level controls.",
        "Help organization transition to a process-based approach for financial control compliance, identifying effective ways to appropriately reduce effort through better risk assessment, scoping and use of technology.",
        "Approach and methodology is oriented towards a consultative and collaborative model, bringing to table good understanding of your industry.",
        "Benefits of IFC include – Definition of clear accountability and Transparency, opportunities to plug leakages, streamlining & standardizing controls and enhancing governance framework."
      ]
    },
    {
      title: "RISK ADVISORY, INTERNAL & MANAGEMENT AUDITS",
      content: [
        "Comprehensive evaluation of internal controls, internal systems and internal processes in organizations and recommending areas for improvement.",
        "Vastly experienced audit professionals follow a risk-based approach that involves risk assessment of the entity’s business & its key business process.",
        "Risk-based internal audit helps the risk management function of the entity by providing assurance about the risk mitigation and provides assurance to the management that risk management processes are managing risks effectively, in relation to the risk appetite.",
        "Approach comprises of a completely independent process, and information technology (IT) internal audit sourcing capabilities that use industry leading practices and deep technical and analytical skills related to core process and related control assessments."
      ]
    },
    {
      title: "IND-AS, IFRS & US GAAP ADVISORY",
      content: [
        "Advising and assisting clients in respect of accounting under various GAAPs which involves assistance in implementation of identified changes for convergence, assisting in compilation of financial statements, providing adequate staff trainings and consultancy on technical issues.",
        "Proactively monitoring new accounting rules, alerting our clients to dynamic requirements and offering assistance with addressing complex accounting or reporting challenges.",
        "Certified technical teams with proven skills provide all the guidance to the entities about the evolving global financial reporting framework ensuring that the reporting requirements are complied."
      ]
    },
    {
      title: "FINANCIAL STATEMENTS AUDIT",
      content: [
        "Extensive experience in providing assurance services under various statutes across various industries for the past several decades.",
        "Assurance services involve carrying out Statutory and Tax Audits to ensure that financial statements present a true and fair view of financial positions and operational results in accordance with the guidelines issued by the regulator.",
        "Audit reports are prepared strictly in accordance with the rules and regulations defined by the Government agencies. The complete audit process is IT enabled and review and documentation is carried out through software.",
        "Continuous knowledge enhancement is ensured through internal publications, trainings and seminars."
      ]
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <div className="background py-3 text-center">
        <h1 className="fw-bold">Corporate Laws</h1>
      </div>

      {/* Main Image */}
      <div className="container py-4">
        <img
          src="/audit-image.jpg"
          alt="Audit & Assurance"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Intro */}
      <div className="container py-3">
        <h2 className="fw-bold text-success mb-3">Corporate Laws</h2>
        <p>
          Providing assurance services under various statutes across various industries for the past several decades.
        </p>

        {/* Collapsible Sections */}
        {sections.map((sec, idx) => (
          <div key={idx} className="bg-light border rounded p-3 mb-2">
            {/* Clickable Heading */}
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection(idx)}
            >
              <h5 className="fw-bold m-0">{sec.title}</h5>
              <span style={{ fontSize: "1.5rem" }}>
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </div>

            {/* Collapsible Content */}
            {openIndex === idx && (
              <div className="mt-3">
                <ul>
                  {sec.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="container py-4">
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3 bg-success text-white p-3 rounded">
            <h5 className="fw-bold">How we can help you?</h5>
            <p>Contact us at the office nearest to you or submit a business enquiry online.</p>
        <Link to="/contact" className="btn btn-light text-success fw-semibold">
  CONTACT US
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Taxes() {
  const [openIndexDirect, setOpenIndexDirect] = useState(null);
  const [openIndexIndirect, setOpenIndexIndirect] = useState(null);

  const toggleDirect = (index) => {
    setOpenIndexDirect(openIndexDirect === index ? null : index);
  };

  const toggleIndirect = (index) => {
    setOpenIndexIndirect(openIndexIndirect === index ? null : index);
  };

  const sections = [
    {
      title: "INTERNATIONAL DESK",
      content: [
        "Suggesting entry options to foreign entities.",
        "Assistance in seeking approvals for Liaison Office, Project Office, Branch Office, and formation of subsidiaries and JVs.",
        "Other regulatory compliances for foreign entities.",
        "Handholding in Compliances.",
        "Advising on salary structure of expatriate employees."
      ]
    },
    {
      title: "TAX COMPLIANCES",
      content: [
        "Filing of Income-tax returns and TDS returns.",
        "Withholding Tax Advisory and issuing requisite certificate.",
        "Obtaining various certificate from Income Tax department.",
        "Compliances under gratuity, superannuation, and other such Acts."
      ]
    },
    {
      title: "REPRESENTATION AND LITIGATION",
      content: [
        "Representation for tax assessment and appeals.",
        "Representing foreign companies before Authority for Advance Ruling (AAR).",
        "Handling litigation at High Court and Supreme Court level.",
        "Handling prosecution matters.",
        "Representation before CBDT."
      ]
    },
    {
      title: "TRANSFER PRICING",
      content: [
        "Advising clients on optimal Pricing Policy.",
        "Conducting Transfer Pricing Audits and Certification for both International and Domestic transactions.",
        "Representation before various authorities",
        "Handling Advance Pricing Agreement (APA) assignments.",
        "Compliances w.r.t Country by Country Reporting and Master File."
      ]
    },
    {
      title: "INTERNATIONAL TAX ADVISORY",
      content: [
        "Tax consultancy, advisory and cross-border restructuring",
        "Drafting / Vetting of agreements such as International Contracts, Collaboration Agreements, Shareholder Agreements.",
        "Advising on inbound and outbound investments",
        "Advising on taxability of foreign companies in India.",
        "Advising on BEPS operations"
      ]
    },
    {
      title: "DOMESTIC TAX ADVISORY",
      content: [
        "All areas of taxation : Personal Tax, Corporate Tax.",
        "Suggesting legal structure of business entities.",
        "Transactional advisory – optimal deal structure.",
        "Tax Due Diligence",
        "Family Settlements, Estate Planning",
        "Advising clients on establishment of Tax Management System",
        "Conducting Diagnostic Study to ensure full tax benefits of various incentive provisions availed"
      ]
    }
  ];

  const indirectTaxSections = [
    {
      title: "ASSESSMENT AUDIT & APPEALS – VAT, Service Tax, Excise, Custom & GST",
      content: [
        "Files preparation for assessment, audit, appeal.",
        "Assessment, audit, appeal.",
        "Representing before the revenue authorities at various levels."
      ]
    },
    {
      title: "GST STATUTORY AUDIT",
      content: [
        "Review of data, returns, systems vis-à-vis Tax Laws.",
        "Review of Tax computation.",
        "Finalization of observation and discussion.",
        "Finalization of Reconciliation and Audit Report.",
        "Signing of Audit Report & reconciliation Statement."
      ]
    },
    {
      title: "GST REVIEW / INTERNAL AUDIT",
      content: [
        "Taxability of transactions.",
        "Documentation review/Audit.",
        "ITC compliances.",
        "Applicability of rates.",
        "Compliances processes."
      ]
    },
    {
      title: "GST COMPLIANCE",
      content: [
        "All India GST Compliances.",
        "Data analysis vis-à-vis Tax Laws.",
        "Liability Calculation.",
        "Return Filing.",
        "Monthly MIS of indirect Tax Compliance.",
        "Obtaining GSTIN."
      ]
    },
    {
      title: "INDIRECT TAX ADVISORY",
      content: [
        "Advising client on establishment of indirect tax management system, in all areas i.e. GST, Customs, Foreign Trade Policies and Old Laws (Excise, Service Tax & VAT).",
        "Suggesting legal structure of business transactions.",
        "Written opinion.",
        "Taxability of the transaction."
      ]
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <div className="background py-3 text-center">
        <h1 className="fw-bold">Direct / Indirect Taxes</h1>
      </div>

      {/* Main Image */}
      <div className="container py-4">
        <img
          src="/audit-image.jpg"
          alt="Audit & Assurance"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Direct Taxes */}
      <div className="container py-0">
        <h2 className="fw-bold text-success mb-1">Direct</h2>
        <p>
          All areas of taxation : Personal Tax, Corporate Tax. | Suggesting legal structure of business entities. | Transactional advisory – optimal deal structure | Tax Due Diligence
        </p>
      </div>

      <div className="container py-4">
        {sections.map((sec, idx) => (
          <div key={idx} className="bg-light border rounded p-3 mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleDirect(idx)}
            >
              <h5 className="fw-bold m-0">{sec.title}</h5>
              <span style={{ fontSize: "1.5rem" }}>
                {openIndexDirect === idx ? "▲" : "▼"}
              </span>
            </div>

            {openIndexDirect === idx && (
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

      {/* Indirect Taxes */}
      <div className="container py-0">
        <h2 className="fw-bold text-success mb-1">Indirect</h2>
        <p>
          Advising client on establishment of indirect tax management system, in all areas i.e. GST, Customs, Foreign Trade Policies and Old Laws (Excise, Service Tax & VAT) | Suggesting legal structure of business transactions
        </p>
      </div>

      <div className="container py-4">
        {indirectTaxSections.map((sec, idx) => (
          <div key={idx} className="bg-light border rounded p-3 mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleIndirect(idx)}
            >
              <h5 className="fw-bold m-0">{sec.title}</h5>
              <span style={{ fontSize: "1.5rem" }}>
                {openIndexIndirect === idx ? "▲" : "▼"}
              </span>
            </div>

            {openIndexIndirect === idx && (
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
            <button className="btn btn-light text-success fw-semibold">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

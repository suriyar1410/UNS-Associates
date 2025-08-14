import { useState } from "react";
import './contactUs.css'

export default function ContactUs() {
  const offices = [
    {
      city: "RAJAPALAYAM",
      address: "136, Railway Feeder Road, PACR Bhavanam, 1st Floor, Rajapalayam - 626117",
      phone: "9994365496",
      email: "suneshwaran@outlook.com",
    },
    {
      city: "SALEM",
      address: "2/298, Near Ramanna Theator, Perumagoundampatti, Illampatti, Salem - 637502",
      phone: "9445603588",
      email: "umalink87@gmail.com",
    },
    {
      city: "TIRUPATTUR",
      address: "No 13 Cutchery Street, Tirupattur - 635601",
      phone: "9443220913",
      email: "pukrajkumar@yahoo.com",
    },
    {
      city: "BENGALURU",
      address: "J P Nagar, Bengaluru, Karnataka State - 560078",
      phone: "9677278078",
      email: "caknr90@gmail.com",
    },
    {
      city: "TRICHY",
      address: "9th Cross, Thillai Nagar, Trichy - 620018",
      phone: "9677278078",
      email: "caknr90@gmail.com",
    },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page container py-5">
      <h1 className="text-center mb-5 main-title">Contact Us</h1>

      {/* Office Locations */}
      <div className="row g-4 mb-5">
        {offices.map((office, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card office-card h-100">
              <div className="card-body">
                <h5 className="card-title">{office.city}</h5>
                <p className="card-text">{office.address}</p>
                <p className="fw-bold">📞 {office.phone}</p>
                <a href={`mailto:${office.email}`} className="email-link">{office.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enquiry Form */}
      <div className="card enquiry-card mx-auto p-4">
        <h3 className="mb-4 title">Enquiry Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        <button type="submit"  className="btn btn-main d-block mx-auto">
            Send Message</button>
        </form>
      </div>
    </div>
  );
}

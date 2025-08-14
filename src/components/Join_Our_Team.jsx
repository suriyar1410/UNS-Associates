import "./JoinOurTeam.css";

export default function JoinOurTeam() {
  return (
    <div className="join-team-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Join Our Team</h2>
        <p className="section-description mb-4">
          We’re always looking for passionate, talented, and creative individuals to help us grow and deliver the best to our clients. 
          If you’re ready to make an impact, we’d love to meet you!
        </p>

        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>🚀 Career Growth</h5>
              <p>Opportunities to learn, grow, and advance in your career.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>🤝 Friendly Team</h5>
              <p>Work with supportive colleagues in a collaborative environment.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-card p-3">
              <h5>📅 Flexibility</h5>
              <p>Enjoy a healthy work-life balance with flexible schedules.</p>
            </div>
          </div>
        </div>

        <a href="mailto:yourhr@email.com" className="btn btn-main">
          Apply Now
        </a>
      </div>
    </div>
  );
}

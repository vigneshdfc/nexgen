import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="mx">
      <footer>
        <div className="section-1-rpa">
          <h1>NEX-GEN Corporation </h1>
          <p>
            Call now: <span>(319)555-0115</span>
          </p>
        </div>
        <div className="footer">
          <div className="section-1">
            <h1>NEX-GEN Corporation </h1>
            <p>
              Call now: <span>(319)555-0115</span>
            </p>
          </div>
          <div className="section">
            <strong>Quick Link</strong>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="section">
            <strong>Candidate</strong>
            <p>Browse Jobs</p>
            <p>Browse Employers</p>
            <p>Candidate Dashboard</p>
            <p>Saved Jobs</p>
          </div>
          <div className="section">
            <strong>Employers</strong>
            <p>Post a job</p>
            <p>Browse Candidates</p>
            <p>Employers Dashboard</p>
            <p>Applications</p>
          </div>
          <div className="section">
            <strong>Support</strong>
            <p>Faqs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
      <div className="terms">
        <h6>All rights reserved @ 2024 NEX-GEN Corporation</h6>
      </div>
    </div>
  );
};

export default Footer;

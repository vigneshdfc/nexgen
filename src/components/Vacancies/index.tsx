import React from "react";
import "./vacancies.scss";

const Vacancies: React.FC = () => {
  return (
    <div className="mx">
      <div className="vacancies">
        <h3>Most Popular Vacancies</h3>
        <div className="main-content-wrapp">
          <div className="vac-contents">
            <p>IT Manager</p>
            <span>67,222 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>Software Developer</p>
            <span>82,222 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>Operation Research Analayis</p>
            <span>98,222 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>Data Scientist</p>
            <span>93,222 Open positions</span>
          </div>
        </div>

        <div className="main-content-wrapp">
          <div className="vac-contents">
            <p>Financial Manager</p>
            <span>98,222 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>IT Manager</p>
            <span>89,042 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>Management Analayis</p>
            <span>10,222 Open positions</span>
          </div>
          <div className="vac-contents">
            {" "}
            <p>Data Scientist</p>
            <span>73,222 Open positions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;

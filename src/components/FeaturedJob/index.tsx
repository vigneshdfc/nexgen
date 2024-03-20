import React from "react";
import Button from "../Button";
import "./featurejob.scss";
import { ReactComponent as Arrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Label } from "../../assets/icons/label.svg";

import { Companies, FeatureJob } from "../../data";

const FeaturedJob: React.FC = () => {
  return (
    <div className="mx">
      <div className="featured-jobs">
        <div className="title">
          <h3>Featurd Job</h3>
          <Button varient="secondary">
            View All <Arrow />
          </Button>
        </div>

        <div className="feature-job">
          {FeatureJob.map((f, i) => (
            <div className="border-wrapp" key={i} data-aos="flip-down">
              <p>{f.title}</p>
              <div className="req">
                <button>{f.time}</button>
                <span>Min.Exp:{f.exp}</span>
              </div>

              <div className="company">
                <div className="name">
                  <p>{f.company}</p>
                  <div className="location">
                    <div>
                      <Location />
                    </div>
                    <span>{f.location}</span>
                  </div>
                </div>
                <Label />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="top-companies-wrapp">
        <h3>Top Companies</h3>
        <div className="grid-wrapp">
          {Companies.map((f, i) => (
            <div className="top-companies" key={i}>
              <div className="companies">
                <div className="company-logo">
                  {/* <Building /> */}
                  <img src={f.logo} alt="logo" width="35px" height="35px" />
                </div>
                <div className="company-Name">
                  <p>{f.company}</p>
                  <div className="location">
                    <div>
                      <Location />
                    </div>
                    <span>{f.location}</span>
                  </div>
                </div>
              </div>
              <div>
                <Button varient="positions">Open Positions (3)</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;

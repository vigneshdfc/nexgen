import React from "react";
import "./portal.scss";
import { JobPortal } from "../../data";

const Portal: React.FC = () => {
  return (
    <div className="mx">
      <div className="portal">
        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          How NEX-GEN Job Portal Work
        </h3>

        <div className="folow-job">
          {JobPortal.map((f, i) => (
            <div className="portal" key={i} data-aos="zoom-in">
              <div className="user">
                <img src={f.icon} alt="user" />
              </div>
              <p>{f.title}</p>
              <span>{f.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portal;

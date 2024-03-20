import React from "react";
import Button from "../Button";
import "./register.scss";
import { ReactComponent as Arrow } from "../../assets/icons/white-r-arrow.svg";
import { ReactComponent as RegisterBg } from "../../assets/icons/register-illustration.svg";
import { ReactComponent as EmployerBg } from "../../assets/icons/employers-illustration.svg";

const Register: React.FC = () => {
  return (
    <div className="mx">
      <div className="register-candidate">
        <div className="register">
          <div className="candidate">
            <div>
              <h4>Become a Candidate</h4>
              <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam facere voluptas vitae adipisci explicabo sequi amet!
              </h6>
              <Button varient="primary">
                Register Now <Arrow />
              </Button>
            </div>
            <div className="image">
              <RegisterBg />
            </div>
          </div>
        </div>
        <div className="register">
          <div className="candidate">
            <div>
              <h4>Become a Employers</h4>
              <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam facere voluptas vitae adipisci explicabo sequi amet!
              </h6>
              <Button varient="primary">
                Register Now <Arrow />
              </Button>
            </div>
            <div className="image">
              <EmployerBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

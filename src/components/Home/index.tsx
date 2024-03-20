import React from "react";
import "./hero.scss";
import Button from "../Button";
import { ReactComponent as Call } from "../../assets/icons/call.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail .svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as HeroImg } from "../../assets/icons/hero.svg";
import { ReactComponent as Bag } from "../../assets/icons/work-bag-svgrepo-com (1).svg";
import { ReactComponent as Build } from "../../assets/icons/building-svgrepo-com.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import Header from "../Header";

const Hero: React.FC = () => {
  return (
    <div className="mx">
      <div className="hero">
        <div className="hero-header">
          <div className="info">
            <div className="call">
              <Call />
              <span>+81 80-7654-3210</span>
            </div>
            <div className="call">
              <Mail />
              <span>info@gmail.com</span>
            </div>
          </div>
          <div className="country"></div>
        </div>

        <div className="content">
          <div className="hero-content-wrapp">
            <h1>
              Let's make it
              <br /> happen together!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, asperiores recusandae. Libero repellat nulla
            </p>
            <div className="input-tag">
              <div className="search">
                <Search />
                <input type="text" placeholder="Job tittle,Keyword..." />
              </div>
              <div className="search-2">
                <Location />
                <input type="text" placeholder="Your Location" />
              </div>
              <Button varient="primary">Find Job</Button>
            </div>
            <h6>
              Suggestion: Designer,Programing,Digital Marketing,Video, Animation
            </h6>
          </div>
          <div className="hero-img">
            <HeroImg />
          </div>
        </div>

        <div className="candidates">
          <div className="work-count">
            <div className="icon">
              <Bag />
            </div>
            <div className="count">
              <p>17,000,23</p>
              <span>Live job</span>
            </div>
          </div>
          <div className="work-count">
            <div className="icon">
              <Build />
            </div>
            <div className="count">
              <p>17,000,23</p>
              <span>Live job</span>
            </div>
          </div>
          <div className="work-count">
            <div className="icon">
              <Profile />
            </div>
            <div className="count">
              <p>17,000,23</p>
              <span>Live job</span>
            </div>
          </div>
          <div className="work-count">
            <div className="icon">
              <Bag />
            </div>
            <div className="count">
              <p>17,000,23</p>
              <span>Live job</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

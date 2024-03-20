import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import Button from "../Button";
import "./header.scss";

const Header: React.FC = () => {
  const [active, setActive] = useState("menu");
  console.log(active);

  const navToggle = () => {
    active === "menu" ? setActive("menu nav_active") : setActive("menu");
  };

  return (
    <div className="mx">
      <div className="header">
        <div className="menu_bar" onClick={navToggle}>
          <Menu />
        </div>

        <div className={active}>
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/Candidates">Candidates</NavLink>
            <NavLink to="/Employers">Employers</NavLink>
          </nav>
        </div>

        <div className="section-1">
          <div className="logo">
            <h1>NEXrec</h1>
          </div>
          <div className="routs">
            <nav>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/Candidates">Candidates</NavLink>
              <NavLink to="/Employers">Employers</NavLink>
            </nav>
          </div>
        </div>

        <div className="section-2">
          <Button varient="primary">Post a job</Button>
          <Button varient="secondary">Login / Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

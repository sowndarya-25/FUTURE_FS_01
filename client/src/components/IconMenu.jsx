import React from "react";
import { FaTools, FaLaptopCode, FaTrophy } from "react-icons/fa";
import "./IconMenu.css";

const IconMenu = ({ openModal }) => {
  return (
    <div className="icon-menu">
      <div className="icon-btn" onClick={() => openModal("skills")}>
        <FaTools />
        <span>Skills</span>
      </div>

      <div className="icon-btn" onClick={() => openModal("projects")}>
        <FaLaptopCode />
        <span>Projects</span>
      </div>

      <div className="icon-btn" onClick={() => openModal("achievements")}>
        <FaTrophy />
        <span>Achievements</span>
      </div>
    </div>
  );
};

export default IconMenu;

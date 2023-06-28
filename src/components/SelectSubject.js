


import React, { useState } from "react";
import "./SelectSubject.css";

function SelectSubject({ subjects }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="Select-subject">
      <hr className="hline" />
      <div className="collapse-button">
        <button className="btn btn-danger" onClick={toggleCollapse}>
          {isCollapsed ? "Select subject" : "Hide subjects"}
        </button>
      </div>
      {!isCollapsed && (
        <ul className="subject-list">
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectSubject;


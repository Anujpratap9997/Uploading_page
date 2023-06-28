
import React, { useState } from "react";
import "./FormOut.css";
import RadioBtn from "./RadioBtn";

function FormOut({ listSubject }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("");

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    console.log("Selected Subject:", subject);
  };

  return (
    <section className="chatbox">
      <div className="chat-input-holder">
        <div className="card text-center w-50 p-3 mx-auto">
          <div className="card-header">
            <h2>Upload your Files</h2>
          </div>
          <div className="card-body">
            <button
              className="btn btn-primary collapse-btn"
              onClick={toggleCollapse}
            >
              Choose subject
            </button>
            {!isCollapsed && (
              <div className="collapse-content">
                <form>
                  {listSubject.map((subject, index) => (
                    <div key={index} className="radio RadioButton">
                      <label>
                        <input type="radio" value={subject} checked={subject === selectedSubject} onChange={() => handleSubjectSelection(subject)}/>
                        {subject}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            )}

            {selectedSubject && (
              <div className="m-3">
                You have selected: {selectedSubject} subject
              </div>
            )}

            <form action="GET">
              <input type="file" id="myFile" name="filename" className="mt-3" multiple />
              <br />
            </form>
          </div>
          <RadioBtn selectedSubject={selectedSubject} />
          <div className="card-footer text-body-primary">
            <input type="submit" className="btn btn-info" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormOut;


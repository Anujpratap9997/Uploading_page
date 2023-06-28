import React from "react";
import "./Subjects.css"
function Subjects(props){
    
    return(
        <div>
            <div className="dropdown">
            <a className="btn btn-primary dropdown-toggle btn1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.sub}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Material 1</a></li>
              <li><a className="dropdown-item" href="#">Material 2</a></li>
              <li><a className="dropdown-item" href="#">Material 3</a></li>
            </ul>
          </div>
        </div>
    );
}

export default Subjects;
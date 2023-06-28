import React from "react";
import Subjects from "./Subjects";
import "./SubList.css";

function SubList(props) {
  const handleDeleteSubject = () => {
    alert("Do you Really want to delete the the subject ?")
    props.onDelete(props.item);
  };

  return (
    <li className="list-item sublist">
      <Subjects sub={props.item} />
      <button className="btn btn-sm btn-danger delete-btn" onClick={handleDeleteSubject}>
        Delete
      </button>
    </li>
  );
}

export default SubList;

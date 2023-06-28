import React from "react";
import "./AddSubject.css";

function AddSubject(props) {
    const [inputText, setInputText] = React.useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleAddSubject = () => {
        if (inputText.trim() !== "") {
            props.addList(inputText);
            setInputText("");
        }
        else if(inputText.trim()===""){
            alert("kindly add the subject name")
        }
    };

    return (
        <div className="input-container">
            <input type="text" className="input-box-sub" placeholder="Enter Subject" value={inputText} onChange={handleInputChange}/>
            <button
                className="btn btn-primary add-btn"
                onClick={handleAddSubject}
            >
                +
            </button>
        </div>
    );
}

export default AddSubject;

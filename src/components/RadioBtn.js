
import React, { Component } from "react";
import "./RadioBtn.css"
import "./FormOut"
class RadioBtn extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="text-center">
          <h6>Choose your material type</h6>
        </div>
        <div className="radio RadioButton">
          <label>
            <input
              type="radio"
              value="Core Material"
              checked={this.state.selectedOption === "Core Material"}
              onChange={this.onValueChange}
            />
            Core Material
          </label>
        </div>
        <div className="radio RadioButton">
          <label>
            <input type="radio" value="Reference Material" checked={this.state.selectedOption === "Reference Material"} onChange={this.onValueChange} />
            Reference Material
          </label>
        </div>
        <div className="radio RadioButton">
          <label>
            <input type="radio" value="Class Notes" checked={this.state.selectedOption === "Class Notes"} onChange={this.onValueChange}/>
            Class Notes
          </label>
        </div>

        {this.state.selectedOption && (
              <div className="m-3">
                You have selected: {this.state.selectedOption} 
              </div>
            )}
            
        {/* <div>
          Selected option is : {this.state.selectedOption}
        </div> */}
        
      </form>
    );
  }
}

export default RadioBtn;
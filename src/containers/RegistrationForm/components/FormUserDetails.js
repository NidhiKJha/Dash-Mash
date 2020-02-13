import React, { Component } from "react";
import "./style.css";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div id="main-registration-container">
        
        <div id="register">
          <form>
          <h3 padding= "10px"
          margin="normal"
              fullWidth="true">Registration page</h3>
              <br />
            <label>First Name</label>
            <input
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <label>Last Name</label>

            <input
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <label>Email</label>
            <input
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <button className="button" onClick={this.continue}>
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
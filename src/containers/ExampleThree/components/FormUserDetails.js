import React, { Component } from "react";
import "./style.css";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // const { values, handleChange } = this.props;
    return (
      <div id="main-registration-container">
        <div id="register">
          <div className="account-card">
            <form>
              <h3 padding="10px" margin="normal" fullWidth="true">
                Registration page for HUF
              </h3>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Company Name</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Contact Person Name</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Contact No.</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Contact Number"></input>
              </div>
              <br />
              
              <a
                class="btn btn-primary account__btn account__btn--small"
                onClick={this.continue}
              >
                Continue
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;

import React, { Component } from "react";
import "./style.css";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div id="main-registration-container">
        <div id="register">
          <div className="account-card">
            <form>
              <h3 padding="10px" margin="normal" fullWidth="true">
                Verify
              </h3>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Aadhar Card Number</span>
                <div class="form__form-group-field"></div>   
                <input name="name" required type="text" placeholder="Name" ></input>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">PAN Number</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Address</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br />
              
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Bank Name</span>
                <div class="form__form-group-field"></div>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="Name"
                ></input>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">IFSC</span>
                <div class="form__form-group-field"></div>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="Name"
                ></input>
              </div>

              {/* <div class="form__form-group">
                <span class="form__form-group-label">E-mail</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br /> */}
              <div class="form__form-group">
                <span class="form__form-group-label">Upload the sign</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
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

export default FormPersonalDetails;

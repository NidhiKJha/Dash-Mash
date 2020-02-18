import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

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
                <span class="form__form-group-label">First Name</span>
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
                <span class="form__form-group-label">Last Name</span>
                <div class="form__form-group-field"></div>
                <input
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Name"
                ></input>
                <div class="requirements">
                    Your password must be at least 6 characters as well as
                    contain at least one uppercase, one lowercase, and one
                    number.
                  </div>
              </div>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">Mobile</span>
                <div class="form__form-group-field"></div>
                <input name="name" type="text" placeholder="Name"></input>
              </div>
              <br />
                  
                
            
              <br />
              <a>
              <Link className="btn btn-outline-primary account__btn account__btn--small" to="/pages/one"> Log In </Link>

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

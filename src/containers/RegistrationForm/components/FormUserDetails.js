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
          <div className =  "account-card">
          <form>
          <h3 padding= "10px"
          margin="normal"
              fullWidth="true"> New User Registration page</h3>
              <br />
              <div class="form__form-group">
                <span class="form__form-group-label">First Name</span>
                <div class="form__form-group-field">
                      </div><input name="name" type="text" placeholder="Name">
                      </input>
                      </div>
            <br />
            <div class="form__form-group">
                <span class="form__form-group-label">Last Name</span>
                <div class="form__form-group-field">
                      </div><input name="name" type="text" placeholder="Name">
                      </input>
                      </div>
            <br />
            <div class="form__form-group">
                <span class="form__form-group-label">Mobile</span>
                <div class="form__form-group-field">
                      </div><input name="name" type="text" placeholder="Name">
                      </input>
                      </div>
            <br />
            <div class="form__form-group">
                <span class="form__form-group-label">E-mail</span>
                <div class="form__form-group-field">
                      </div><input name="name" type="text" placeholder="Name">
                      </input>
                      </div>
            <br />
            <div class="form__form-group">
                <span class="form__form-group-label">Password</span>
                <div class="form__form-group-field">
                      </div><input name="name" type="text" placeholder="Name">
                      </input>
                      </div>
            <br />
            <a
                class="btn btn-primary account__btn account__btn--small"
                onClick={this.continue}
              >
                Submit
              </a>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
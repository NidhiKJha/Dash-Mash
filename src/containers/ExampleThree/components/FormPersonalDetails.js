import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export class FormPersonalDetails extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
    this.continue = this.continue.bind(this);
  }

  continue(e) {
    e.preventDefault();
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["pan"] = "";
      fields["aadhar"] = "";
      fields["bankaccountno"] = "";
      fields["bankname"] = "";
      fields["bankifscno"] = "";

      this.setState({ fields: fields });
      this.props.nextStep();
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["pan"]) {
      formIsValid = false;
      errors["pan"] = "*Please enter your PAN number";
    }

    if (typeof fields["pan"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
      if (!pattern.test(fields["pan"])) {
        formIsValid = false;
        errors["pan"] = "*Please enter PAN number";
      }
    }
    if (!fields["aadhar"]) {
      formIsValid = false;
      errors["aadhar"] = "*Please enter your Aadhar Number";
    }

    if (typeof fields["aadhar"] !== "undefined") {
      if (!fields["aadhar"].match(/^[0-9]{12}$/)) {
        formIsValid = false;
        errors["aadhar"] = "*Please enter valid Aadhar Number";
      }
    }

    if (!fields["bankname"]) {
      formIsValid = false;
      errors["bankname"] = "*Please enter your bankname";
    }

    if (typeof fields["bankname"] !== "undefined") {
      if (!fields["bankname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["bankname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["bankifscno"]) {
      formIsValid = false;
      errors["bankifscno"] = "*Please enter your bankifsc";
    }

    if (typeof fields["bankifscno"] !== "undefined") {
      if (!fields["bankifscno"].match( /^[A-Z|a-z]{4}[0][\d]{6}$/)) {
        formIsValid = false;
        errors["bankifscno"] = "*Please enter bank ifsc only.";
      }
    }

    if (!fields["bankaccountno"]) {
      formIsValid = false;
      errors["bankaccountno"] = "*Please enter your bank account no";
    }

    if (typeof fields["bankaccountno"] !== "undefined") {
      if (!fields["bankaccountno"].match(/^\d{9,18}$/)) {
        formIsValid = false;
        errors["bankaccountno"] = "*Please enter bank account number only.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    // const { values, handleChange } = this.props;
    return (
      <div id="main-registration-container">
        <div id="register">
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
            onChange={this.props.handleChange}
          >
            <div class="form__form-group">
              <span class="form__form-group-label">PAN Number</span>
              <input
                type="text"
                name="pan"
                value={this.state.fields.pan}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.pan}</div>{" "}
            </div>
            <br />
            <div class="form__form-group">
              <span class="form__form-group-label">Aadhar Number</span>
              <input
                type="text"
                name="aadhar"
                value={this.state.fields.aadhar}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.aadhar}</div>{" "}
            </div>

            <br />
            <div class="form__form-group">
              <span class="form__form-group-label">Bank Account Number</span>
              <input
                type="text"
                name="bankaccountno"
                value={this.state.fields.bankaccountno}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.bankaccountno}</div>{" "}
            </div>
            <br />
            <div class="form__form-group">
              <span class="form__form-group-label">Bank IFSC Number</span>
              <input
                type="text"
                name="bankifscno"
                value={this.state.fields.bankifscno}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.bankifscno}</div>{" "}
            </div>
            <br />
            <div class="form__form-group">
              <span class="form__form-group-label">Bank Name</span>
              <input
                type="text"
                name="bankname"
                value={this.state.fields.bankname}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.bankname}</div>{" "}
            </div>

            {/* <a
                class="btn btn-primary account__btn account__btn--small"
                onClick={this.continue}
              >
             
             
            </a> */}
            <br />
            <br />
            <input type="submit" className="button" value="Continue" />
          </form>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;

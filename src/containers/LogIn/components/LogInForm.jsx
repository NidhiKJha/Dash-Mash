import React, { PureComponent } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';

import { Link } from 'react-router-dom';
import CheckBox from '../../../shared/components/form/CheckBox';
import "./style.css";

class LogInForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <form className="form">
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
           
              
            </div>
            <input
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
        
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
             
            </div>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <button
              className={`form__form-group-button${showPassword ? ' active' : ''}`}
              onClick={e => this.showPassword(e)}
              type="button"
            ><EyeIcon />
            </button>
          </div>
          <div className="account__forgot-password">
            <a href="/">Forgot a password?</a>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <CheckBox name="remember_me" label="Remember me" value="on" onChange={() => {}} />
          </div>
        </div>
        <Link className="btn btn-primary account__btn account__btn--small" to="/pages/one">Log In</Link>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/Registration">Create a New Account</Link>
       
      </form>
    );
  }
}

export default LogInForm;

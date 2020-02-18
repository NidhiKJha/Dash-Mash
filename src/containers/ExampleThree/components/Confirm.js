import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { CompanyName, contactperson, email, contactnumber, pan,aadhar, bankaccountno,  bankifscno ,  bankname}
      

    } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="Company Name" secondary={ CompanyName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="contact person" secondary={contactperson} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact Number" secondary={contactnumber} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
           
            <ListItem>
              <ListItemText primary="PAN number" secondary={pan} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Aadhar Number" secondary={aadhar} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Bank Account Number" secondary={bankaccountno} /> 
              <ListItem>
              <ListItemText primary="Bank Name" secondary={bankname} /> 
            </ListItem>
            </ListItem>
            <ListItem>
              <ListItemText primary="IFSC" secondary={bankifscno} /> 
            </ListItem>
            
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;

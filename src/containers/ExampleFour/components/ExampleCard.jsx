import React, { Component } from "react";
import axios from "axios";
import {Col} from 'reactstrap';

class RegistrationForm extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log("asd");
    axios
      .get(
        "https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/getinstrumentsdetails"
      )
      .then(response => {
        const res = response.data.filter(
          item => item["ISIN"] === this.props.uniqueId
        );
        if (res.length > 0) {
          this.setState({
            data: res[0]
          });
        }
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    return (
      <Col md={12}>
        <div style={{ display: "flex",width:'100%' }}>
          <div style={{ flex: 4 }}>
            <h2>Power Finance Corporation Ltd.</h2>
            <p>Power Finance Corporation LTD..... something something</p>
            <p>engaged something something something</p>
            <table>
              <tr>
                <td>ISIN</td>
                <td>{this.props.uniqueId}</td>
              </tr>
              <tr>
                <td>Country </td>
                <td>India </td>
              </tr>
              <tr>
                <td>Currency </td>
                <td>INR </td>
              </tr>
            </table>
          </div>
          <div style={{ flex: 6 }}>
          <div>
            Button group
          <button>
            Group1
          </button>
          <button>
            Group2
          </button>
        <div>
      </div>
      Chart over here
  </div>
          </div>
        </div>
        {JSON.stringify(this.state.data)}
      </Col>
    );
  }
}

export default RegistrationForm;

import React, { Component, useState } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

class RegistrationForm extends Component {
  state = {
    data: null,
    bond_feature_array: []
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
        console.log(res);
        if (res.length > 0) {
          let bond_array = [
            { title: "Coupon Rate", value: res[0]["Coupon_Rate_Actual"] },
            { title: "Coupon Frequency", value: 'NA' },
            { title: "Issue Date", value: res[0]["Allotment_Date"] },
            { title: "Coupon Rate", value: res[0]["Coupon_Rate_Actual"] },
            { title: "Coupon Rate", value: res[0]["Coupon_Rate_Actual"] },
          ];
          this.setState({
            data: res[0],
            bond_feature_array: bond_array
          });
        }
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Col md={12}>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 4 }}>
              <h2>A.K. Capital Corporation Private Limited</h2>
              <p>A.K. Capital Corporation Private Limited</p>
              <p>Details</p>
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
                <button>BSE</button>
                <button>NSE</button>
                <div></div>
                Chart over here
              </div>
            </div>
          </div>
        </Col>
        <div
          style={{
            marginTop: 5,
            marginBottom: 5,
            width: "100%",
            height: 0,
            borderTop: "1px solid #333"
          }}
        />
        <div>
          <SingleBoxSection
            sectionName={"Bond Features "}
            sectionItemArray={this.state.bond_feature_array}
          />
             <SingleBoxSection
            sectionName={"Bond Features "}
            sectionItemArray={this.state.bond_feature_array}
          />   <SingleBoxSection
          sectionName={"Bond Features "}
          sectionItemArray={this.state.bond_feature_array}
        />
        </div>
      </div>
    );
  }
}

export default RegistrationForm;

const SingleBoxSection = props => {
  const { sectionName, sectionItemArray } = props;
  const [isOpen, updateOpenFlagState] = useState(true);
  return (
    <div style={{marginBottom:2}}>
      <BoxHeader
        title={sectionName}
        action={_ => updateOpenFlagState(previousValue => !previousValue)}
        isOpen={isOpen}
      />
      {isOpen && (
        <Row>
          {sectionItemArray.map((item, index) => {
            return (
              <Col key={index} md={3}>
                <BoxCard title={item.title} value={item.value} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

const BoxHeader = props => {
  const { title, action, isOpen } = props;
  return (
    <div onClick={action} style={{backgroundColor:'lightGreen'}}>
      <h3>{title}  (Click in Me to hide an show)</h3>
      <span>Some Icon {isOpen ? "yes" : "No"}</span>
    </div>
  );
};

const BoxCard = props => {
  const { title, value } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

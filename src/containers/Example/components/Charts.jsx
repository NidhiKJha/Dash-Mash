import React, { Component } from "react";
import { Card, CardBody, Col,Row } from 'reactstrap';

import { Bar, Line, Pie, Doughnut} from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <Row className="chart">
        <Col md={6}>
        <Card>
      <CardBody>
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Yearly Total Investment In"+ this.props.location,
                fontSize: 18
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          </CardBody>
          </Card>
        </Col>
        <Col md={6}>
        <Card>
      <CardBody>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Total Investment In " + this.props.location,
                fontSize: 18
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          </CardBody>
          </Card>
        </Col>
        <Col md={6}>
        <Card>
      <CardBody>
          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Market Value In " + this.props.location,
                fontSize: 18
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          </CardBody>
          </Card>
        </Col>
        <Col md={6}>
        <Card>
      <CardBody>
          <Doughnut
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Investment by Assets In " + this.props.location,
                fontSize: 18
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
          </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Chart;

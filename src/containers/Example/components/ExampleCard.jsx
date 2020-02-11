import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Chart from "./Charts";
import Header from "./Header";


class ExampleCard extends Component {
  constructor(){
  super();
  this.state = {
    chartData:{}
  }
}

componentWillMount(){
  this.getChartData();
}

getChartData(){
  // Ajax calls here
  this.setState({
    chartData:{
      labels: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Bitcoin SV', 'XRP', 'Ethereum Classic'],
      datasets:[
        {
          label:'Investment',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }
  });
}



render() {
  return (
    <div className = "header col-lg-12">
     <Header/>
   
  <Col md={12}>
    
        <div className="card__title" >

          
        <Chart chartData={this.state.chartData} location="CryptoChart" legendPosition="bottom"/>
        </div>
        <p>Content....</p>
     </Col>
  </div>
);
  }}
export default ExampleCard;

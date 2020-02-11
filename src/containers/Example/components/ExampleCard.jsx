import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ChartOne from "./Charts";

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
         <ChartOne/>
        </div>
        <p>Your content here</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;

import React from "react";
import { Col, Container, Row } from "reactstrap";
import ExampleCard from "./components/ExampleCard";

const ExamplePage = props => {
  const uniqueID  = props.match.params.id;
  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Example Page Four</h3>
        </Col>
      </Row>
      <Row>
        <ExampleCard uniqueId={uniqueID} />
      </Row>
    </Container>
  );
};

export default ExamplePage;

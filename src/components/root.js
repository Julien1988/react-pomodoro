/*
/src/component.root.js
*/

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import classnames from "classnames";

const RootComponent = () => {
  return (
    <Container fluid>
      <Container fluid className="header">
        <Row>
          <Col>
            <h1 className="text-center">Pomodoro</h1>
            <h2 className="text-center text-uppercase">Upgrate your time</h2>
          </Col>
        </Row>
      </Container>
      <Container className="main">
        <Row className="d-flex align-items-center justify-content-center mt-5 mb-5 bg-warning rounded-lg">
          <Col className="col-md-auto ml-3 mr-3 mt-3 mb-3 pl-3 pr-3 pt-3 pb-3 bg-light rounded-pill">
            19:59
          </Col>
          <Row className="d-block ml-3 mr-3 mt-3 mb-3 pl-3 pr-3 pt-3 pb-3">
            <Col className="text-center pl-1 pr-1 pt-1 pb-1">
              <button type="button" class="btn btn-primary">
                +
              </button>
            </Col>
            <Col className="text-center pl-1 pr-1 pt-1 pb-1">
              <button type="button" class="btn btn-success">
                Play
              </button>
            </Col>
            <Col className="text-center pl-1 pr-1 pt-1 pb-1">
              <button type="button" class="btn btn-danger">
                Reset
              </button>
            </Col>
            <Col className="text-center pl-1 pr-1 pt-1 pb-1">
              <button type="button" class="btn btn-primary">
                -
              </button>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default RootComponent;

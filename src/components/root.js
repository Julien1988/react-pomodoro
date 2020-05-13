/*
/src/component.root.js
*/

import React, { useState, useCallback } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import classnames from "classnames";

const RootComponent = () => {
  // Gestion du click sur le bouton Play / Stop
  const [clickMe, setClickMe] = useState(false);

  // const handleClickMe = useCallback(() => setClickMe(true), [setClickMe]);

  const handleClickMe = () => {
    if (clickMe != true) {
      setClickMe(true);
    } else {
      setClickMe(false);
    }
  };

  let $content;

  if (clickMe) {
    $content = (
      <Button className={"btn btn-outline-danger"} onClick={handleClickMe}>
        {"Stop"}
      </Button>
    );
  } else {
    $content = (
      <Button className={"btn btn-success"} onClick={handleClickMe}>
        {"Play"}
      </Button>
    );
  }

  // Gestion du Timer
  const [timer, setTimer] = useState(0);

  let $timer = "12:34";

  const timerUpClickMe = () => {
    setTimer(timer + 1);
    console.log(timer);
  };

  // Affichage du code
  return (
    <Container fluid>
      <Container fluid className={"header"}>
        <Row>
          <Col>
            <h1 className={"text-center"}>{"Pomodoro"}</h1>
            <h2 className={"text-center text-uppercase"}>
              {"Upgrate your time"}
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className={"main"}>
        <Row
          className={
            "d-flex align-items-center justify-content-center mt-5 mb-5 bg-warning rounded-lg"
          }
        >
          <Col
            className={
              "col-md-auto ml-3 mr-3 mt-3 mb-3 pl-3 pr-3 pt-3 pb-3 bg-light rounded-pill"
            }
          >
            {$timer}
          </Col>
          <Row className={"d-block ml-3 mr-3 mt-3 mb-3 pl-3 pr-3 pt-3 pb-3"}>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>
              <Button className={"btn btn-primary"} onClick={timerUpClickMe}>
                {"+"}
              </Button>
            </Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>{$content}</Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>
              <Button className={"btn btn-danger"}>{"Reset"}</Button>
            </Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>
              <Button className={"btn btn-primary"}>{"-"}</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default RootComponent;

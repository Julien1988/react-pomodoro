/*
/src/component.root.js
*/

import React, { useState, useCallback, useReducer } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import classnames from "classnames";

const RootComponent = () => {
  // Gestion du click sur le bouton Play / Stop

  const [clickMe, setClickMe] = useState(false);

  const handleClickMe = useCallback(() => setClickMe(!clickMe), [
    clickMe,
    setClickMe,
  ]);

  let $content;

  // Gestion du décompte des minutes
  const minuterOn = () => {
    console.log("décompte en cours");
    setInterval(timerStart, 1000);
  };

  const timerStart = () => {
    console.log("timeStarter");
    timerMinutesCount--;
    console.log(timerMinutesCount);
  };

  // Annulation du décompte
  const minuterOff = () => {
    clearInterval();
    console.log("OFF");
  };

  // Logique conditionelle

  if (clickMe) {
    minuterOn();
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
    minuterOff();
  }

  // Gestion du Timer

  let $timer;

  // Gestion des buttons + et -
  let timerMinutesCount = 25;

  let $upButton;
  let $downButton;
  const initialState = { count: 25 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 5 };
      case "decrement":
        return { count: state.count - 5 };
      default:
        throw new Error();
    }
  }

  const timeCounterImcrement = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    Total: {
      timerMinutesCount = state.count;

      if (timerMinutesCount < 0 || timerMinutesCount >= 60) {
        timerMinutesCount = 0;
        state.count = 0;
        $timer = timerMinutesCount + ":" + 0 + 0;
        return timerMinutesCount;
      }
      console.log(timerMinutesCount);
      $timer = timerMinutesCount + ":" + 0 + 0;
    }
    $upButton = (
      <Button
        className={"btn btn-primary"}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
    );
    $downButton = (
      <Button
        className={"text-center pl-1 pr-1 pt-1 pb-1"}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
    );
  };

  timeCounterImcrement();

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
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>{$upButton}</Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>{$content}</Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>
              <Button className={"btn btn-danger"}>{"Reset"}</Button>
            </Col>
            <Col className={"text-center pl-1 pr-1 pt-1 pb-1"}>
              {$downButton}
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default RootComponent;

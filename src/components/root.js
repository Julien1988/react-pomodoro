/*
/src/component.root.js
*/

import React, { useState, useEffect, useCallback, useReducer } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import classnames from "classnames";

const RootComponent = () => {
  return (
    <>
      <Hello />, <Timer />
    </>
  );
};

const Hello = () => {
  return (
    <div>
      <h1>Pomodoro</h1>
      <h2>Upgrate your time</h2>
    </div>
  );
};

const Timer = () => {
  const [childCounter, setChildCounter] = useState(25);
  return (
    <div>
      <h3>{`Time : ${childCounter}`} </h3>
      <TimeButton onSave={(value) => setChildCounter(value)} />
    </div>
  );
};

const TimeButton = ({ onSave }) => {
  const [count, setCount] = useState(25);
  console.log(count);
  return (
    <div>
      <p> vous avez cliquez {count} fois</p>
      <button
        onClick={() => {
          onSave(count + 5);
          setCount(count + 5);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          onSave(count - 5);
          setCount(count - 5);
        }}
      >
        -
      </button>
    </div>
  );
};

export default RootComponent;

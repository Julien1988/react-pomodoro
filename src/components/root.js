/*
/src/component.root.js
*/

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import classnames from "classnames";

// Variable stoquant les données de temps
let getTimer;
// Variable stoquant le setInterval
let intervalVar;

// Lancement de React
const RootComponent = () => {
  return (
    <>
      <Hello />, <Timer />
    </>
  );
};

// Affichage du titre
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
  const [timerVar, setTimerVar] = useState(false);

  // Lancement du timer

  const timerStart = () => {
    console.log("PLAY");
    if (timerVar == false) {
      setTimerVar(true);
      console.log(timerVar);
    } else {
      console.log(timerVar);
    }
  };
  let timerEndVar;
  const timerEnd = () => {
    if (timerEndVar == undefined) {
      timerEndVar = childCounter;
    } else if (timerEndVar > 2) {
      timerEndVar--;
      console.log(timerEndVar);
    } else {
      console.log("TERMINE");
      timerStop();
      window.alert("PAUSE");
    }
  };

  useEffect(() => {
    let interval;
    if (timerVar) {
      interval = setInterval(() => {
        setChildCounter((childCounter) => childCounter - 1), timerEnd();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerVar]);

  // Stoper le timer

  const timerStop = () => {
    console.log("STOP");
    return setTimerVar(false);
  };

  return (
    <div>
      <h3 className="timer">{`Timer : ${childCounter}`} </h3>
      <TimeButton onSave={(value) => setChildCounter(value)} />
      <button
        onClick={() => {
          timerStart();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          timerStop();
        }}
      >
        Stop
      </button>
    </div>
  );
};

const TimeButton = ({ onSave }) => {
  const [count, setCount] = useState(25);

  return (
    <div>
      <button
        onClick={() => {
          onSave(count - 5);
          setCount(count - 5);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          onSave(count + 5);
          setCount(count + 5);
        }}
      >
        +
      </button>
    </div>
  );
};

export default RootComponent;

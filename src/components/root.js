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

  // Boucle diminuant le temps restant
  const incraseTimeCount = () => {
    console.log("lancement de la fonction setInterval");

    setChildCounter(childCounter - 1);
    console.log(childCounter);
  };

  // Lancement du timer

  useEffect(() => {});
  const timerStart = () => {
    intervalVar = setInterval(incraseTimeCount, 1000);
  };

  // Stoper le timer
  const timerStop = () => {
    clearInterval(intervalVar);
  };

  return (
    <div>
      <h3 className="timer">{`Timer : ${childCounter}`} </h3>
      <TimeButton onSave={(value) => setChildCounter(value)} />
      <button
        onClick={() => {
          timerStart(childCounter);
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

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
    <div className="text-center">
      <h1>Pomodoro</h1>
      <h2>Upgrate your time</h2>
    </div>
  );
};

const Timer = () => {
  const [childCounter, setChildCounter] = useState(25);
  const [timerVar, setTimerVar] = useState(false);

  const [minutesCount, setMinutesCount] = useState(0);
  // let tenMinutesCount = 0;
  // let minutesCount = 0;
  // Lancement du timer

  const timerStart = () => {
    console.log("PLAY");
    if (timerVar == false) {
      setChildCounter(childCounter - 1);
      setMinutesCount(59);
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
      timeToTakeABreak();
    }
  };
  let minutesCountVar;
  const secondTimer = () => {
    console.log(minutesCount);
    if (minutesCountVar == undefined || minutesCountVar == 0) {
      minutesCountVar = 59;
      setMinutesCount(59);
    } else {
      minutesCountVar--;
      console.log(minutesCountVar);
    }
  };

  const timeToTakeABreak = () => {
    console.log("time to take a break");

    timerStop();
    window.alert("It's time to take a break !");
    setChildCounter(25);
  };

  useEffect(() => {
    let interval;
    let minutesCountInterval;
    if (timerVar) {
      interval = setInterval(() => {
        setChildCounter((childCounter) => childCounter - 1), timerEnd();
      }, 60000);
      minutesCountInterval = setInterval(() => {
        setMinutesCount((minutesCount) => minutesCount - 1), secondTimer();
      }, 1000);
    }
    return () => stopAll(interval, minutesCountInterval);
  }, [timerVar]);

  // Stoper le timer

  const stopAll = (interval, minutesCountInterval) => {
    clearInterval(interval);
    clearInterval(minutesCountInterval);
  };

  const timerStop = () => {
    console.log("STOP");
    return setTimerVar(false);
  };

  return (
    <div className="text-center">
      <h3 className="timer">{`Timer : ${childCounter} : ${minutesCount}`} </h3>
      <TimeButton onSave={(value) => setChildCounter(value)} />
      <div>
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

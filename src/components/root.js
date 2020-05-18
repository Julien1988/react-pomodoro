/*
/src/component.root.js
*/

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

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
    <div className="text-center pt-5">
      <h1>Pomodoro</h1>
      <h2>Upgrate your time</h2>
    </div>
  );
};

const Timer = () => {
  const [childCounter, setChildCounter] = useState(25);
  const [timerVar, setTimerVar] = useState(false);

  const [minutesCount, setMinutesCount] = useState(0);

  // Lancement du timer

  const timerStart = () => {
    //console.log("PLAY");
    if (timerVar == false && childCounter > 0) {
      setChildCounter(childCounter - 1);
      setMinutesCount(59);
      setTimerVar(true);
      // console.log(timerVar);
    } else {
      // console.log(timerVar);
    }
  };
  let timerEndVar;
  const timerEnd = () => {
    if (timerEndVar == undefined) {
      timerEndVar = childCounter - 1;
    } else if (timerEndVar > 0) {
      timerEndVar--;

      //console.log(timerEndVar);
    } else {
      timeToTakeABreak();
    }
  };
  let minutesCountVar;
  const secondTimer = () => {
    //console.log(minutesCount);
    if (minutesCountVar == undefined || minutesCountVar == 0) {
      minutesCountVar = 59;
      setMinutesCount(59);
    } else {
      minutesCountVar--;
      //console.log(minutesCountVar);
    }
  };

  const timeToTakeABreak = () => {
    //console.log("time to take a break");

    timerStop();
    window.alert("It's time to take a break ! :-)");
    setChildCounter(25);
    setMinutesCount(0);
  };

  useEffect(() => {
    let interval;
    let minutesCountInterval;
    if (timerVar) {
      interval = setInterval(() => {
        //console.log("Lauched");
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
    //console.log("STOP");
    return setTimerVar(false);
  };

  return (
    <div className="text-center d-flex flex-row justify-content-center">
      <div className="m-3">
        <h3 className="timer m-3">
          {`Timer ${childCounter} : ${minutesCount}`}{" "}
        </h3>
        <TimeButton onSave={(value) => setChildCounter(value)} />
      </div>
      <div className="m-3 d-flex flex-column justify-content-center">
        <button
          className="m-2"
          onClick={() => {
            timerStart();
          }}
        >
          Start
        </button>
        <button
          className="m-2"
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
        className="m-2"
        onClick={() => {
          onSave(count - 5);
          setCount(count - 5);
          if (count == 0) {
            setCount(0);
            onSave(0);
          }
        }}
      >
        -
      </button>
      <button
        className="m-2"
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

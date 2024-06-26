import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((counter) => counter + 1);
  };

  const decrementHandler = () => {
    setCounter((counter) => counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div class="container">
      <h1 id="num">{counter}</h1>
      <div class="btns">
        <button class="dec" onClick={decrementHandler}>
          <i class="fas fa-minus"></i>
        </button>
        <button class="reset" onClick={resetCounter}>
          <i class="fas fa-redo"></i>
        </button>
        <button class="inc" onClick={incrementHandler}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

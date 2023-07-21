/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React from "react";
import { useState } from 'react'

function Playground(props) {
  const [weapon, setWeapon] = useState('');
  const [badWeapon, setBadWeapon] = useState((''))

  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState('Decrement');

  const [spinnerOn, setSpinnerOn] = useState(false)

  const doubler = function () {
    let i = 1;
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count + (1 * count))
    }
  }
  const half = function () {
    if (count === 0) {
      return;
    } else if (count > 0) {
      setCount(count / 2)
      setDecrement('this is asymptotic');
    }
  }
  const both = function () {
    setCount(0);
    setDecrement('Decrement')
  }
  //
  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : 'OFF'}</h3>
        <button onClick={() => setSpinnerOn(!spinnerOn)}>Turn Spinner Off</button>
      </div>
    )
  }
  //
  const rockPaperScissorsShoot = (evt) => {
    let { value } = evt.target
    setWeapon(value)
    let random = Math.floor(Math.random() * 3);
    let weaponsArray = ['rock', 'paper', 'scissors'];
    setBadWeapon(weaponsArray[random]);
  }
  //cannot mutate state directly
  //a tuple is an array in js that has two items 


  return (
    <>
      <h1>Hello</h1>
      <h1>{count}</h1>
      <button onClick={doubler}>Increment</button>
      <button onClick={half}>{decrement}</button>
      <button onClick={both}>Return to zero</button>
      <h3>The spinner is {spinnerOn ? 'ON' : 'OFF'}</h3>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle Spinner</button><br /><br /><br /><br />
      <div>
        <h1>Rock Paper Scissors Shoot</h1>
        <h3>The current weapon is: {weapon}</h3>
        <h3>The oppenent's weapon is: {badWeapon}</h3>
        <button onClick={rockPaperScissorsShoot} value='scissors'>Pick scissors</button>
        <button onClick={rockPaperScissorsShoot} value='rock'>Pick rock</button>
        <button onClick={rockPaperScissorsShoot} value='paper'>Pick paper</button>
        <h3>The winner is : {result}</h3>
      </div>
    </>
  )
}
export default Playground 
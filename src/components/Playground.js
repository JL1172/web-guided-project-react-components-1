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

function Playground(props, value) {
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
  let Player1 = 'YOU';
  let Player2 = 'BAD GUY';
  let counter = 0;
  let counter1 = 0
  let counter2 = 0; 
  let counter3 = 0;
  const rockPaperScissorsShoot = (evt) => {
    let intervalID = setInterval(()=> {
        if (counter === 2) {
          clearInterval = intervalID;
          let intervalID1 = setInterval(()=> {
            if (counter1 === 2) {
              clearInterval = intervalID1;
              let intervalID2 = setInterval(()=> {
                if (counter2 === 2) {
                  clearInterval = intervalID2;
                } else {
                  const scissors = document.querySelector('#scissors');
                  scissors.classList.toggle('game')
                  scissors.style.transition = '.2s'
                  counter2++
                  console.log(counter2)
                }
            },700)
            } else {
              const paper = document.querySelector('#paper');
              paper.classList.toggle('game')
              paper.style.transition = '.2s'
              counter1++
              console.log(counter1)
            }
        },500)
        } else {
          const rock = document.querySelector('#rock');
          rock.classList.toggle('game')
          rock.style.transition = '.2s'
          counter++
          console.log(counter)
        }
    },500)
    setTimeout(() => {
      const shoot = document.querySelector('#shoot') 
      shoot.classList.toggle('game')
      shoot.style.transition = '.2s'
    },5000)
    setTimeout(() => {
      evt.target.disable = true;
      let { value } = evt.target
    setWeapon(value)

    let random = Math.floor(Math.random() * 3);
    let weaponsArray = ['rock', 'paper', 'scissors'];
    setBadWeapon(weaponsArray[random]);
    }, 6000);
  }


  const clear = (evt) => {
    setBadWeapon('');
    setWeapon('');
    const shoot = document.querySelector('#shoot')
    shoot.classList.toggle('game'); 
    shoot.style.transition = '.2s'
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
      <div className="container">
        <h1><div id ='rock'>Rock</div><div id = 'paper'>Paper</div> <div id = 'scissors'>Scissors</div> <div id = 'shoot'>Shoot</div></h1>
        <h3><em>Your</em> current weapon is: <em>{weapon}</em></h3>
        <h3>The <em>oppenent's</em> weapon is: <em>{badWeapon}</em></h3>
        <button className="buttonForGame" onClick={rockPaperScissorsShoot} value='scissors'>Pick scissors</button>
        <button className="buttonForGame" onClick={rockPaperScissorsShoot} value='rock'>Pick rock</button>
        <button className="buttonForGame" onClick={rockPaperScissorsShoot} value='paper'>Pick paper</button>
        <button className="buttonForGame" onClick={clear}>New Game</button>
        <h3>The winner is: {weapon === 'rock' && badWeapon === 'scissors' ? <em className = 'container'>YOU✅</em> : weapon === 'rock' &&
          badWeapon === 'paper' ? 'Bad Guy❌' :
          weapon === 'paper' && badWeapon === 'rock' ? <em className = 'container'>YOU✅</em> : weapon === 'paper' && badWeapon === 'scissors' ?
            "Bad Guy❌" : weapon === 'scissors' && badWeapon === 'paper' ?
            <em className = 'container'>YOU✅</em> : weapon === 'scissors' && badWeapon === 'rock' ? "Bad Guy❌" : !badWeapon && !weapon ? '' : "It is a draw"}</h3><br/><br/><br/><br/><br/><br/>
      </div>
    </>
  )
}


export default Playground 
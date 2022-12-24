import React from 'react';
import { useDispatch ,useSelector } from "react-redux";
import { decrement, increment } from "../../redux/ducks/counter";

function Counter() {
    // const
  return (
    <div className="counter-container">
    <h3>Count : </h3>

    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  </div>
  )
}

export default Counter
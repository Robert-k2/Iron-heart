import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 10;
    case "decrement":
      return state - 2;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function CounterWithInit() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <p className="card-title">Daily Rep Counter</p>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
        <span className="counter-unit">reps</span>
      </div>
      <div className="counter-controls">
        <button className="btn btn-primary" onClick={() => dispatch("increment")}>+10</button>
        <button className="btn btn-ghost" onClick={() => dispatch("decrement")}>-2</button>
        <button className="btn btn-danger" onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterWithInit;


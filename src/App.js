import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetValue } from "./actions";

function App() {
  const myState = useSelector((state) => state.changedNumber);
  const disptach = useDispatch();
  return (
    <div
      className="bg-primary w-100 text-white d-flex flex-column justify-content-center align-items-center p-5"
      style={{ height: "100vh" }}
    >
      <h1 className="display-5 fw-bold"><em>Increment / Decrement Counter</em></h1>
      <h4 className="fs-4">Using React and Redux</h4>
      <div className="card bg-danger bg-gradient mt-5 p-3 w-50">
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning"
            onClick={() => disptach(decrement())}
          >
            Decrement
          </button>
          <button
            className="btn btn-success"
            onClick={() => disptach(increment(2))}
          >
            Increment
          </button>
        </div>
        <div className="text-center mt-3">
          <h2 className="display-4">{myState}</h2>
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() => disptach(resetValue())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

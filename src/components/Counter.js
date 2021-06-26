import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispath = useDispatch();

  const toggleCounterHandler = () => {
    dispath(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispath(counterActions.increment());
  };

  const decrementCounterHandler = () => {
    dispath(counterActions.decrement());
  };

  const increaseCounterHandler = () => {
    dispath(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>

          <div>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={increaseCounterHandler}>Increase by 10</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}>
        {show ? "Hide" : "Show"} Counter
      </button>
    </main>
  );
};

export default Counter;

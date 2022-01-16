import { increment, decrement } from "../redux/counter/counterActions";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.counterReducer);
  console.log(counterReducer);

  return (
    <>
      <h1>Counter: {counterReducer.number}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}

export default Counter;

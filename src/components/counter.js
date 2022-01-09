import { increment, decrement } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.counterReducer);

  return (
    <>
      <h1>Counter: {counterReducer}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}

export default Counter;

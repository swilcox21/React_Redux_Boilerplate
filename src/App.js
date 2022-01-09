import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggle } from './actions';
import Counter from './components/counter';
import Toggle from './components/toggle';

function App() {
  const dispatch = useDispatch();
  const toggleReducer = useSelector((state) => state.toggleReducer);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <br />
      <Counter />
      <br />
      <br />
      <br />
      <Toggle />
    </div>
  );
}

export default App;

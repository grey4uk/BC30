import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './index';
import {
  plus,
  minus,
} from 'redux/toolkit/slices/counterSlice';
// import { actions } from 'redux/toolkit/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const { step, counter } = useSelector((state) => state);
  // const { plus, minus } = actions;

  const increment = () => {
    dispatch(plus(step));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onClick={() => dispatch(minus(step))}
        disabled={counter - step < 0}>
        <h2>-</h2>
      </Button>
      <Title />
      <Button onClick={increment}>
        <h2>+</h2>
      </Button>
    </div>
  );
};

export default Counter;

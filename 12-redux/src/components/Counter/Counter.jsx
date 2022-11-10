import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './index';
import { actions } from 'redux/actions/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const { step, counter } = useSelector(
    (state) => state.counter
  );
  const { plus, minus } = actions;
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
      <Button onClick={() => dispatch(plus(step))}>
        <h2>+</h2>
      </Button>
    </div>
  );
};

export default Counter;

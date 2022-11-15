import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from 'redux/counter/counter';
import { counterSelector } from 'redux/selectors';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  return (
    <div>
      <h3>{counter}</h3>
      <Button
        type='button'
        onClick={() => dispatch(setCounter())}>
        Click
      </Button>
    </div>
  );
};

export default Counter;

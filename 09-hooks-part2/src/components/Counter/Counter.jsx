import { useContext } from 'react';
import { CounterContext } from 'components/CounterContext/CounterContext';

const Counter = () => {
  const { counter1, counter2, counter3, handleClick } =
    useContext(CounterContext);
  const value = CounterContext.Consumer;
  console.log('value', value);
  return (
    <ul>
      <li>
        <h2>{counter1}</h2>
        <button
          name='counter1'
          type='button'
          onClick={handleClick}>
          Click
        </button>
      </li>
      <li>
        <h2>{counter2}</h2>
        <button
          type='button'
          name='counter2'
          onClick={handleClick}>
          Click
        </button>
      </li>
      <li>
        <h2>{counter3}</h2>
        <button
          type='button'
          name='counter3'
          onClick={handleClick}>
          Click
        </button>
      </li>
    </ul>
  );
};

export default Counter;

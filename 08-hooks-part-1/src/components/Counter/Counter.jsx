import { useState } from 'react';

// const init = {
//   counter1: 0,
//   counter2: 1,
//   counter3: 10,
// };

const Counter = () => {
  // classes
  //   state = init

  // hooks
  //   const [state, setState] = useState(init);
  //   const { counter1, counter2, counter3 } = state;

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(10);

  const options = {
    counter1: setCounter1,
    counter2: setCounter2,
    counter3: setCounter3,
  };

  const handleClick = ({ target: { name } }) => {
    //     setState({...state, [name]: state[name] + 1 });
    // switch (name) {
    //   case 'counter1':
    //     setCounter1((prev) => prev + 1);
    //     break;
    //   case 'counter2':
    //     setCounter2((prev) => prev + 1);
    //     break;
    //   case 'counter3':
    //     setCounter3((prev) => prev + 1);
    //     break;

    //   default:
    //     break;
    // }
    //     options['counter1']()===setCounter1()
    options[name]((prev) => prev + 1);
  };
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

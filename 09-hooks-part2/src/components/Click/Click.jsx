import { useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Click = () => {
  const [click, setClick] = useState(0);
  const [fibonaciRowLength, setFibonaciRowLength] =
    useState(0);
  //   const [click1, setClick1] = useState(0);
  //   const [square, setSquare] = useState(0);

  const handleClick = () => {
    setClick((prev) => prev + 1);
  };

  const square = useMemo(() => {
    console.log('Memo recreated>>>');
    return click * click;
  }, [click]);

  const rowFibonaci = useMemo(() => {
    const array = [];
    console.log('recount>>>>');
    if (!fibonaciRowLength) return array;
    for (let i = 0; i < fibonaciRowLength; i++) {
      i > 1
        ? array.push(array[i - 2] + array[i - 1])
        : array.push(i);
    }
    return array;
  }, [fibonaciRowLength]);

  const handleSubmitInput = (e) => {
    e.preventDefault();
    setFibonaciRowLength(
      e.currentTarget.elements.county.value
    );
  };

  //   useEffect(() => {
  //     setSquare(countClick(click));
  //   }, [click]);

  //   useEffect(() => {
  //     const countClick = () => click * click;
  //     setClick(countClick());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   wrong way
  //   const countClick = useCallback((prevClick) => {
  //     console.log('callback run>>>>>');
  //     return prevClick * prevClick;
  //   }, []);

  //   useEffect(() => {
  //     setClick((prev) => countClick(prev));
  //   }, [countClick]);

  return (
    <>
      <div>
        <h1>{square}</h1>
        <button type='button' onClick={handleClick}>
          Click
        </button>
        <Form onSubmit={handleSubmitInput}>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>
              <img
                src='https://static.thenounproject.com/png/677988-200.png'
                alt='find'
                height='24'
              />
            </InputGroup.Text>

            <Form.Control
              placeholder='Enter county of Fibonaci numbers'
              aria-label='County'
              id='county'
              type='number'
            />
          </InputGroup>
        </Form>
        {rowFibonaci.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
      {/* <div>
        <h1>{click1}</h1>
        <button
          type='button'
          onClick={() => setClick1((prev) => prev + 1)}>
          Click1
        </button>
      </div> */}
    </>
  );
};

export default Click;

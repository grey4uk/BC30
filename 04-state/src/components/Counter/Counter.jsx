const Counter = (props) => {
  const { counter, handleClick } = props;
  return (
    <>
      <p>{counter}</p>
      <button
        type='button'
        onClick={() => handleClick('value')}>
        Click
      </button>
    </>
  );
};

export default Counter;

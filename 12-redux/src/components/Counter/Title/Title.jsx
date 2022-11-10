import { useSelector } from 'react-redux';
// import store from 'redux/store';

const Title = () => {
  //   const counter = store.getState().counter;
  const { counter } = useSelector((state) => state.counter);
  return <h1>{counter}</h1>;
};

export default Title;

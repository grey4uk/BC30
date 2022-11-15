import { useSelector } from 'react-redux';
import { greetingOfUserSelector } from 'redux/selectors';

const Greeting = () => {
  const greeting = useSelector(greetingOfUserSelector);
  return <h1>{greeting}</h1>;
};

export default Greeting;

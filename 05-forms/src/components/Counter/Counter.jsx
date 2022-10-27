import css from './Counter.module.css';
import { darkTheme, lightTheme } from 'shared/theme';

const Counter = (props) => {
  const { counter, handleClick, theme } = props;
  return (
    <>
      <p>{counter}</p>
      <button
        className={css.button}
        style={
          theme === 'light'
            ? lightTheme.button
            : darkTheme.button
        }
        type='button'
        onClick={() => handleClick('value')}>
        Click
      </button>
    </>
  );
};

export default Counter;

import { ToastContainer } from 'react-toastify';
import { Counter } from 'components/Counter';
import StepSelector from 'components/StepSelector/StepSelector';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100vw',
      }}>
      <StepSelector />
      <Counter />
      <ToastContainer />
    </div>
  );
};

export default App;

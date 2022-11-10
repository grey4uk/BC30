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
    </div>
  );
};

export default App;

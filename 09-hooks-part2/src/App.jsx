import { Component } from 'react';

// import ItemsList from 'components/ItemsList/ItemsList';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import FormAuth from 'components/FormAuth/FormAuth';
// import Counter from 'components/Counter/Counter';
// import { Wrapper } from 'components/CounterContext/CounterContext';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/* <Wrapper /> */}
        {/* <ItemsList /> */}
        {/* <Counter /> */}
        <FormAuth />
      </ErrorBoundary>
    );
  }
}

export default App;

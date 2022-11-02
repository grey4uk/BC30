import { Component } from 'react';

import ItemsList from 'components/ItemsList/ItemsList';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Counter from 'components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ItemsList />
        {/* <Counter /> */}
      </ErrorBoundary>
    );
  }
}

export default App;

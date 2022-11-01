import { Component } from 'react';

import ItemsList from 'components/ItemsList/ItemsList';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ItemsList />
      </ErrorBoundary>
    );
  }
}

export default App;

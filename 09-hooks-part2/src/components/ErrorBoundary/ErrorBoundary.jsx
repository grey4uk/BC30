import Notiflix from 'notiflix';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: '' };

  componentDidCatch(error, info) {
    //     console.log('error', error);
    //     console.log('info :>> ', info);
    if (error) {
      this.setState({ error: error.message });
      Notiflix.Notify.failure(
        'Error',
        function cb() {
          // callback
        },
        {
          timeout: 2000,
        }
      );
    }
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    return (
      <>
        {error ? (
          <h2>Ooops, something wrong. Try again later</h2>
        ) : (
          children
        )}
      </>
    );
  }
}

export default ErrorBoundary;

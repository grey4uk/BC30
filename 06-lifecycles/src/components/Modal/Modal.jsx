import { Component } from 'react';

class Modal extends Component {
  state = { url: '' };
  componentDidMount() {
    const { pokemon } = this.props;
    pokemon &&
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((r) => r.json())
        .then((r) =>
          this.setState({ url: r.sprites.front_default })
        );

    console.log('componentDidMount in MODAL');
    document.addEventListener(
      'keydown',
      this.props.onClose
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount in MODAL');
    document.removeEventListener(
      'keydown',
      this.props.onClose
    );
  }
  render() {
    const { pokemon } = this.props;
    const { url } = this.state;
    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.4)',
        }}>
        <h1 style={{ background: '#fff' }}>
          <img src={url} alt={pokemon} width='200' />
        </h1>
      </div>
    );
  }
}

export default Modal;

import Modal from 'components/Modal/Modal';
import PokemonsList from 'components/PokemonsList/PokemonsList';
import React from 'react';
class App extends React.Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps>>>>>');
  //   return prevState.count === 0
  //     ? // ? { count: nextProps?.init || 2 }
  //       {
  //         ...prevState,
  //         count: (nextProps && nextProps.init) || 2,
  //       }
  //     : { ...prevState, count: 20 };
  // }

  // constructor(props) {
  //   super(props);
  //   console.log('constructor>>>');
  //   this.state = { count: 0 };
  // }
  state = { count: 0, isShow: false };

  increment = () => {};

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate>>>');
    return nextState.count < 20;
  }

  componentDidMount() {
    const { init } = this.props;
    // console.log('componentDidMount>>>>>>>>', init);
    init && this.setState({ count: init });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { greating: 'HALLO' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate outside if>>>');
    const prevPropCount = prevProps.init;
    // console.log('prevPropCount', prevPropCount);
    const prevCount = prevState.count;
    // console.log('prevCount', prevCount);
    const nextCount = this.state.count;
    // console.log('nextCount', nextCount);
    if (prevPropCount === nextCount) {
      // console.log(
      //   'componentDidUpdate inside if>>>',
      //   snapshot.greating
      // );
      this.setState({ count: nextCount + 1 });
    }
  }

  // countTotal() {
  //   return 1 + 2 + this.state.count;
  // }

  toggleShowModal = () => {
    console.log('toggleShowModal');
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    // const total = this.countTotal();
    const { count, isShow } = this.state;
    const { toggleShowModal } = this;
    // console.log('render>>>>>', count);
    return (
      <>
        {/* <h1 onClick={toggleShowModal}>{count}</h1>
        {isShow && <Modal onClose={toggleShowModal} />} */}
        <PokemonsList />
      </>
    );
  }
}

export default App;

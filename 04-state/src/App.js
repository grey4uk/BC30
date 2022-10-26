import TodosForm from 'components/TodosForm/TodosForm';
import React from 'react';

import Counter from './components/Counter/Counter';
const a = 30;
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { counter: a };
  // }
  state = { counter: a, todos: [] };

  handleClick = (value) => {
    console.log('value :>> ', value);
    // console.log('this :>> ', this);
    // const updater = { counter: this.state.counter + 1 };
    // this.setState(updater);
    // {...this.state,...updater}

    // this.setState((prevState) =>
    //   // prevState=this.state
    //   ({
    //     // ...prevState,
    //     counter: prevState.counter + 1,
    //   })
    // );
    for (let index = 0; index < 3; index++) {
      this.setState((prev) => {
        console.log('prev :>> ', prev);
        // prev.counter === 32 &&
        //   alert(`Yahoo!!!!${prev.counter}`);
        return { counter: prev.counter + 1 };
      });

      // this.setState({ counter: this.state.counter + 1 });
      // console.log(
      //   'this.state.counter :>> ',
      //   this.state.counter
      // );
    }
    for (let index = 0; index < 3; index++) {
      this.setState((prev) => {
        console.log('prev second :>> ', prev);
        return { counter: prev.counter + 1 };
      });
    }
    // console.log(
    //   'this.state.counter :>> ',
    //   this.state.counter
    // );

    // console.log('e :>> ', e.target.textContent);
  };

  setNextCounter = (a) => {
    return this.state.counter + a;
  };

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  render() {
    console.log('this :>> ', this.state);
    // const { counter, id, name } = this.state;
    const { handleClick, setNextCounter, addTodo } = this;

    return (
      <>
        <Counter
          counter={setNextCounter(2)}
          handleClick={handleClick}
        />
        <TodosForm addTodo={addTodo} />
        {/* <Counter counter={this.state.counter} /> */}
      </>
    );
  }
}

export default App;

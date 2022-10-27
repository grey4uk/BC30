import React from 'react';
import { nanoid } from 'nanoid';
import TodosForm from 'components/TodosForm/TodosForm';
import TodosList from 'components/TodosList/TodosList';

// import Counter from './components/Counter/Counter';
const a = 30;
class App extends React.Component {
  state = { counter: a, todos: [], theme: 'light' };

  toggleTheme = () =>
    this.setState((prev) => ({
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));

  handleClick = (value) => {
    for (let index = 0; index < 3; index++) {
      this.setState((prev) => {
        console.log('prev :>> ', prev);

        return { counter: prev.counter + 1 };
      });

      this.toggleTheme();
    }
  };
  setNextCounter = (a) => {
    return this.state.counter + a;
  };

  addTodo = ({ todo, reset }) => {
    const isExist = this.state.todos.some(
      (prevTodo) =>
        prevTodo.title === todo.title &&
        prevTodo.desc === todo.desc
    );
    if (isExist) {
      alert(
        `TODO with title: ${todo.title} is already exist`
      );
      return;
    }
    const newTodo = {
      ...todo,
      id: nanoid(),
      isDone: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
    reset();
  };

  toggleTodoStatus = ({ target: { id } }) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      ),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((el) => el.id !== id),
    });
  };

  render() {
    // const { counter, id, name } = this.state;
    // const { handleClick, setNextCounter, addTodo } = this;
    const { addTodo, toggleTodoStatus, deleteTodo } = this;
    const { todos } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
        {/* <Counter
          counter={setNextCounter(2)}
          handleClick={handleClick}
          theme={theme}
        /> */}
        <TodosForm addTodo={addTodo} />
        <TodosList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      </div>
    );
  }
}

export default App;

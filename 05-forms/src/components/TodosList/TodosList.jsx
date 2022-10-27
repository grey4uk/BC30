import { ReactComponent as Delete } from 'images/delete.svg';

import { Component } from 'react';
import { priorityTypes } from 'components/TodosForm/TodosForm';

class TodosList extends Component {
  state = { selected: priorityTypes.none };
  onSelect = ({ target: { value } }) => {
    this.setState({ selected: value });
  };

  showSelectedTodos = () => {
    const { selected } = this.state;
    const { todos } = this.props;
    if (selected === priorityTypes.none) {
      return todos;
    }
    return todos.filter((el) => el.priority === selected);
  };

  render() {
    const { todos, toggleTodoStatus, deleteTodo } =
      this.props;
    const { onSelect, showSelectedTodos } = this;
    const todosDone = todos.filter(
      (el) => el.isDone
    ).length;
    return (
      <>
        <h3>
          {todosDone}/{todos.length}
        </h3>
        <select
          name='sort'
          defaultValue={priorityTypes.none}
          onChange={onSelect}>
          {Object.values(priorityTypes).map(
            (item, index) => (
              <option
                key={item}
                value={item}
                // selected={index === 1}
              >
                {item}
              </option>
            )
          )}
        </select>
        <ol
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
          {showSelectedTodos().map(
            ({ title, desc, id, isDone, priority }) => (
              <li
                key={id}
                style={{
                  background: isDone ? 'green' : 'red',
                }}>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p>----{priority}------</p>
                <label>
                  Done
                  <input
                    id={id}
                    type='checkbox'
                    onChange={toggleTodoStatus}
                    checked={isDone}
                  />
                </label>
                <button
                  type='button'
                  onClick={() => deleteTodo(id)}>
                  <Delete
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </button>
              </li>
            )
          )}
        </ol>
      </>
    );
  }
}

export default TodosList;
